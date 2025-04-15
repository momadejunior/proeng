import React from "react";

function LanguageSwitcher({ currentLang, onChange }) {
  return (
    <select
      value={currentLang}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: "1rem", fontSize: "1rem" }}
    >
      <option value="pt">Português</option>
      <option value="en">English</option>
    </select>
  );
}

export default LanguageSwitcher;
