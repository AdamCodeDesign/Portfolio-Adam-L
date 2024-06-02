import "./bgdAnimations.scss";

export default function BgdAnimations() {
  const skillName = ["react", "JS", "sass", "html", "RWD", "MUI", "git", "api"];
  
  return (
    <div className="container-animations" >sticky
      {skillName.map((el) => (
        <div className={el} key={el} >
          {el}
        </div>
      ))}
    </div>
  );
}
