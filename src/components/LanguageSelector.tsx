import { useTranslation } from '../i18n';
import { Lang } from '../i18nCore';

export default function LanguageSelector() {
  const { lang, setLang, t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as Lang);
  };
  return (
    <select
      value={lang}
      onChange={handleChange}
      className="bg-brown-700 text-brown-100 p-1 rounded"
      aria-label="Language"
    >
      <option value="en">English</option>
      <option value="th">ไทย</option>
    </select>
  );
}
