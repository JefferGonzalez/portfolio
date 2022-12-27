function flag({ country, alt, lang }) {
  return (
    <img
      alt={alt}
      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
      width="38"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title={lang}
    />
  );
}

export default flag;
