import Button from './Button';
import { toast } from 'react-toastify';
import interactImg from '../../../assets/interact.svg';
import { useConvex, useMutation, useQuery } from 'convex/react';
import React, { useCallback, useState, useEffect } from 'react';
import { api } from '../../../convex/_generated/api';
// import { SignInButton } from '@clerk/clerk-react';
import { ConvexError } from 'convex/values';
import { Id } from '../../../convex/_generated/dataModel';
import { waitForInput } from '../../hooks/sendInput';
import { useServerGame } from '../../hooks/serverGame';
import { useTranslation } from '../../i18n';

export default function InteractButton() {
  // const { isAuthenticated } = useConvexAuth();
  const worldStatus = useQuery(api.world.defaultWorldStatus);
  // debugging: print worldStatus anytime it updates
  React.useEffect(() => {
    console.debug('worldStatus', worldStatus);
  }, [worldStatus]);
  const worldId = worldStatus?.worldId;
  const game = useServerGame(worldId);
  const humanTokenIdentifier = useQuery(api.world.userStatus, worldId ? { worldId } : 'skip');
  const userPlayerId =
    game && [...game.world.players.values()].find((p) => p.human === humanTokenIdentifier)?.id;
  const [inflight, setInflight] = useState(false);
  const [optimisticPlaying, setOptimisticPlaying] = useState<boolean | null>(null);
  const join = useMutation(api.world.joinWorld);
  const leave = useMutation(api.world.leaveWorld);
  const isPlaying = !!userPlayerId;
  const effectivePlaying = optimisticPlaying !== null ? optimisticPlaying : isPlaying;

  // clear optimistic flag once real state resolves
  React.useEffect(() => {
    if (optimisticPlaying !== null && effectivePlaying !== optimisticPlaying) {
      setOptimisticPlaying(null);
    }
  }, [effectivePlaying, optimisticPlaying]);

  const convex = useConvex();
  const joinInput = useCallback(
    async (worldId: Id<'worlds'>) => {
      let inputId;
      try {
        inputId = await join({ worldId });
      } catch (e: any) {
        if (e instanceof ConvexError) {
          toast.error(e.data);
          return;
        }
        throw e;
      }
      try {
        await waitForInput(convex, inputId);
      } catch (e: any) {
        toast.error(e.message);
      }
    },
    [convex],
  );

  const joinOrLeaveGame = async () => {
    if (inflight) {
      console.log('action already in flight');
      return;
    }
    if (!worldId) {
      console.warn('no worldId, cannot join/leave');
      toast.error('Cannot join or leave: no world available');
      return;
    }
    setInflight(true);
    try {
      if (isPlaying) {
        console.log(`Leaving game for player ${userPlayerId}`);
        setOptimisticPlaying(false);
        await leave({ worldId });
      } else {
        if (game === undefined) {
          console.warn('game undefined when joining, proceeding anyway');
        }
        console.log(`Joining game`);
        setOptimisticPlaying(true);
        await joinInput(worldId);
      }
    } catch (e: any) {
      // joinInput already handles its own errors, leave did not.
      if (e instanceof Error) {
        toast.error(e.message);
      }
      // On error revert optimistic
      setOptimisticPlaying(null);
    } finally {
      setInflight(false);
    }
  };
  // if (!isAuthenticated || game === undefined) {
  //   return (
  //     <SignInButton>
  //       <Button imgUrl={interactImg}>Interact</Button>
  //     </SignInButton>
  //   );
  // }
  const { t } = useTranslation();
  return (
    <Button imgUrl={interactImg} onClick={joinOrLeaveGame}>
      {effectivePlaying ? t('menu.leave') : t('menu.interact')}
    </Button>
  );
}
