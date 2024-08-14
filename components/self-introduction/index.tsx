const SelfIntroduction = () => {
  return (
    <div className="flex gap-2 sm:gap-4 p-2 sm:p-4 text-lg flex-col sm:flex-row items-center sm:items-start">
      <p className="text-3xl font-bold italic text-ttertiary">
        Full Stack developer
      </p>
      <p className="indent-2 text-tsecondary leading-relaxed">
        I am Xuan Liu, my English name is Soto. I am now 25 years old and have
        been working for 3 years. I am a full-stack developer, and usually use
        React for front-end, Django for back-end. Three years of experience in
        React development and one year in django. I also have experience in Vue.
        I worked at a geography company called GeoScene (Esri China) for 2 years
        as a <span className="text-thighlight">front-end developer</span>, also
        doing some Python development. Now I'm freelancing, I am available for
        both short and long term projects.
      </p>
    </div>
  );
};

export default SelfIntroduction;
