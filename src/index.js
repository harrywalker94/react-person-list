import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="Person-Img" />
      <h4>{name}</h4>
      <p>{job}</p>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <article className="person-list">
      <Person img="32" name="john" job="artist">
        <p>hruehu fudhvne dnefieju uindcnen </p>
      </Person>
      <Person img="39" name="steve" job="plumber">
        <p>ejdueujdhu uheuhfuhwuhwin unfuheujduju</p>
      </Person>
      <Person img="21" name="adam" job="builder">
        <p>fhjkakqeidj idiiiii kimeinfejnin ini</p>
      </Person>
    </article>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
