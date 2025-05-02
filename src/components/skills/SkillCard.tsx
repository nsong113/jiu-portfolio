interface Skills {
  stack: string;
  skillList: string[];
}

interface Props {
  skill: Skills;
}
function SkillCard({ skill: { stack, skillList } }: Props) {
  return (
    <article className="border-blueLight_color_pale border-[3px] rounded-xl w-80 h-80 mx-auto transition-shadow duration-300 hover:shadow-md hover:shadow-blue-100 sm:w-auto md:w-60 lg:w-auto md:h-80 lg:h-80">
      <h3 className="text-deep_pink_color font-scoreLight text-lg lg:text-xl md:text-base text-center p-4 font-semibold my-2">
        {stack}
      </h3>
      <div>
        <ul>
          {skillList.map((skillItem, idx) => (
            <li
              key={`${stack}${idx}`}
              className="mb-2 list-disc pl-1 ml-8 pr-4 font-scoreLight lg:text-base md:text-sm text-base text-stone-700"
            >
              {skillItem}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default SkillCard;
