import Image from "./Image";
import Title from "./Title";
import Author from "./Author";

const Book = (/*Method 1:Destructuring : {book:{pic,title,aut}} */ props) => {
  //Method 2 : take the parameter as object and then destructure it.
  const { pic, title, aut, number} = props;

  /* const callGetBook = () =>{
    getBook(id);
  } */

  console.log(pic + "," + title + "," + aut);
  return (
    //Method : Setting Values from the destructured Parameter.

    <article className="CardClass">
      <span className="IndxNum">#{number + 1}</span>
      <div className="ImgHolder">
        <Image img={pic} title={title} auth={aut} />
      </div>
      <div className="TxtHolder">
        <Title title={title} />
        <Author author={aut} />
        {/* <button onClick={(e)=>{console.log("["+title+","+aut+"]")}}>GET CONTENT</button> */}
      </div>
      {/* <button onClick={() => getBook(id)}>GET CONTENT</button> */}
    </article>
  );
};

export default Book;