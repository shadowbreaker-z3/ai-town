import { SignInButton } from '@clerk/clerk-react';
import { useTranslation } from '../../i18n';

export default function LoginButton() {
  const { t } = useTranslation();
  return (
    <SignInButton>
      <button className="button text-white shadow-solid">
        <div className="inline-block bg-clay-700">
          <span>{t('menu.login')}</span>
        </div>
      </button>
    </SignInButton>
  );
}
