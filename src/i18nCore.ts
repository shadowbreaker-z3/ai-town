export type Lang = 'en' | 'th';

// translation keys -> text
export const translations: Record<Lang, Record<string, string>> = {
  en: {
    'menu.star': 'Star',
    'menu.help': 'Help',
    'menu.interact': 'Interact',
    'menu.leave': 'Leave',
    'menu.music': 'Music',
    'menu.mute': 'Mute',
    'menu.freeze': 'Freeze',
    'menu.unfreeze': 'Unfreeze',
    'menu.login': 'Log in',
    'menu.accept': 'Accept',
    'menu.reject': 'Reject',
    'menu.startConversation': 'Start conversation',
    'menu.waitingForAccept': 'Waiting for accept...',
    'menu.walkingOver': 'Walking over...',
    'menu.previousConversation': 'Previous conversation',
    'menu.thisIsYou': 'This is you!',
    'menu.conversingWithYou': '(Conversing with you!)',
    'placeholder.typeHere': 'Type here',
    'help.title': 'Help',
    'help.welcome':
      'Welcome to AI town. AI town supports both anonymous <i>spectators</i> and logged in <i>interactivity</i>.',
    'help.spectating': 'Spectating',
    'help.spectatingDesc':
      'Click and drag to move around the town, and scroll in and out to zoom. You can click on an individual character to view its chat history.',
    'help.interactivity': 'Interactivity',
    'help.interactivityDesc':
      'If you log in, you can join the simulation and directly talk to different agents! After logging in, click the "Interact" button, and your character will appear somewhere on the map with a highlighted circle underneath you.',
    'help.controlsLabel': 'Controls:',
    'help.controls.clickToNavigate': 'Click to navigate around.',
    'help.controls.talkInstructions':
      'To talk to an agent, click on them and then click "Start conversation," which will ask them to start walking towards you. Once they\'re nearby, the conversation will start, and you can speak to each other. You can leave at any time by closing the conversation pane or moving away. They may propose a conversation to you - you\'ll see a button to accept in the messages panel.',
    'help.limitNotice':
      "AI town only supports {max} humans at a time. If you're idle for five minutes, you'll be automatically removed from the simulation.",
    'game.title': 'AI Town',
    'game.tagline': 'A virtual town where AI characters live, chat and socialize.',
    joinedConversation: '{name} joined the conversation.',
    leftConversation: '{name} left the conversation.',
    'playerDetails.clickAgent': 'Click on an agent on the map to see chat history.',
  },
  th: {
    'menu.star': '⭐ ดาว',
    'menu.help': 'ช่วยเหลือ',
    'menu.interact': 'โต้ตอบ',
    'menu.leave': 'ออก',
    'menu.music': 'เพลง',
    'menu.mute': 'ปิดเสียง',
    'menu.freeze': 'หยุด',
    'menu.unfreeze': 'ปล่อย',
    'menu.login': 'เข้าสู่ระบบ',
    'menu.accept': 'ยอมรับ',
    'menu.reject': 'ปฏิเสธ',
    'menu.startConversation': 'เริ่มการสนทนา',
    'menu.waitingForAccept': 'รอการตอบรับ...',
    'menu.walkingOver': 'กำลังเดินมา...',
    'menu.previousConversation': 'การสนทนาก่อนหน้า',
    'menu.thisIsYou': 'นี่คือตัวคุณ!',
    'menu.conversingWithYou': '(กำลังสนทนากับคุณ!)',
    'placeholder.typeHere': 'พิมพ์ที่นี่',
    'help.title': 'ช่วยเหลือ',
    'help.welcome':
      'ยินดีต้อนรับสู่ AI Town ระบบรองรับทั้งผู้ชมแบบไม่ระบุตัวตนและการโต้ตอบเมื่อเข้าสู่ระบบ',
    'help.spectating': 'การชม',
    'help.spectatingDesc':
      'คลิกและลากเพื่อเคลื่อนที่ไปรอบ ๆ เมือง และเลื่อนเข้า/ออกเพื่อซูม คุณสามารถคลิกที่ตัวละครเพื่อดูประวัติการแชทได้',
    'help.interactivity': 'การโต้ตอบ',
    'help.interactivityDesc':
      'หากคุณเข้าสู่ระบบ คุณสามารถเข้าร่วมการจำลองและพูดคุยกับตัวละครต่าง ๆ ได้! หลังเข้าสู่ระบบ ให้คลิกปุ่ม "โต้ตอบ" แล้วตัวละครของคุณจะปรากฏบนแผนที่พร้อมวงกลมเน้นใต้ตัวคุณ',
    'help.controlsLabel': 'การควบคุม:',
    'help.controls.clickToNavigate': 'คลิกเพื่อเคลื่อนที่ในเมือง',
    'help.controls.talkInstructions':
      'เพื่อคุยกับตัวละคร ให้คลิกแล้วเลือก “เริ่มการสนทนา” ซึ่งจะให้ตัวละครเดินมาหาคุณ เมื่อเดินมาถึงก็สามารถสนทนากันได้ คุณสามารถออกได้ทุกเมื่อโดยปิดหน้าต่างสนทนาหรือเดินหนี ตัวละครอาจชวนคุณสนทนา – จะมีปุ่มยอมรับในแผงข้อความ',
    'help.limitNotice':
      'AI Town รองรับผู้เล่นมนุษย์ได้สูงสุด {max} คน หากคุณไม่เคลื่อนไหวภายในห้านาที คุณจะถูกนำออกจากระบบอัตโนมัติ',
    'game.title': 'AI Town',
    'game.tagline': 'เมืองเสมือนที่ตัวละคร AI อาศัย พูดคุย และสังสรรค์กัน',
    joinedConversation: '{name} เข้าร่วมการสนทนา',
    leftConversation: '{name} ออกจากการสนทนา',
    'playerDetails.clickAgent': 'คลิกที่ตัวละครบนแผนที่เพื่อดูประวัติการแชท',
  },
};

function interpolate(str: string, vars?: Record<string, string | number>) {
  if (!vars) return str;
  return Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, String(v)), str);
}

export function translate(lang: Lang, key: string, vars?: Record<string, string | number>) {
  const map = translations[lang] || translations.en;
  let txt = map[key] || translations.en[key] || key;
  return interpolate(txt, vars);
}
