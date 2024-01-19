import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import BOOKS from './bookList'
import Book from './Book'
//Method 1

/* const BOOK1 = {
  pic:FWPIC,
  title:"FOURTH WING",
  aut:"REBECCA YARROS",
};
const BOOK2 = {
  pic:IFPIC,
  title:"IRON FLAME",
  aut:"REBECCA YARROS",
};
const BOOK3 = {
  pic:TAPIC,
  title:"THE ALCHEMIST",
  aut:"PAULO COELHO",
};
const BOOK4 = {
  pic:NMPIC,
  title:"NO MATTER WHAT I WILL ALWAYS LOVE YOU",
  aut:"ROHIT DAWESAR",
};
const BOOK5 = {
  pic:ITPIC,
  title:"IN THE PRESENCE OF ABSENCE",
  aut:"MOHOMMUD DARWISH",
}; */

//Method 2

const MyPage = () => {
  return (
    <section>
      <BookList />
    </section>
  );
};

const BookList = () => {

  const getBook=(id)=>{
    const book = BOOKS.find((book)=> book.id===id );
    console.log(book);
  }

  return (
    <>
      <header className="myHeaderBox">
        <h1 className="MyHeader ZoomOnHover">my books</h1>
      </header>
      <section className="FlexADD">
        {/* <EventExample></EventExample> */}
        {
          //Method 1
          /* 
      <Book IMG={BOOK1.pic} TITLE={BOOK1.title} AUTHOR={BOOK1.aut}/>
      <Book IMG={BOOK2.pic} TITLE={BOOK2.title} AUTHOR={BOOK2.aut}/>
      <Book IMG={BOOK3.pic} TITLE={BOOK3.title} AUTHOR={BOOK3.aut}/>
      <Book IMG={BOOK4.pic} TITLE={BOOK4.title} AUTHOR={BOOK4.aut}/>
      <Book IMG={BOOK5.pic} TITLE={BOOK5.title} AUTHOR={BOOK5.aut}/> */
        }
        {
          //Method 2

          BOOKS.map((BK, index) => {
            const { /* pic,title,aut, */ id } = BK;

            //Method 1 : as sending the Object one by one
            /* return <Book IMG={pic} TITLE = {title} AUTHOR = {aut} key={id}/> */

            //Method 2 : Sending the Whole Object And later Destructering.
            /* return <Book book = {BK} key={id}/> */

            //Method 3:
            return <Book {...BK} key={id} getBook={getBook} number={index} />;
          })
        }
      </section>
    </>
  );
};

//Method 1

/* const Book = (props) => {
  console.log(props);
  return (
    <article className="CardClass">
      <div className="ImgHolder">
        <Image img={props.IMG} title={props.TITLE} auth={props.AUTHOR} />
      </div>
      <div className="makeitDown">
        <Title title={props.TITLE} />
        <Author author={props.AUTHOR} />
      </div>
    </article>
  );
}; */

//Method 2

/* const EventExample = () => {
  const onChangeHandle = (e) => {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("onChange Event invoked");
  };

  const onClickHandle = (e) => {
    console.log("onClick Event Invoked");
    console.log(e);
    alert("Invoked onClick Event");
  };

  const onSubmitHandle = (e) => {
    console.log("FORM SUBMITTED.");
    console.log(e);
  };
  return (
    <div>
      <section>
        <form onSubmit={onSubmitHandle}>
          <h2>This is Usual Form</h2>
          <input
            type="text"
            name="example"
            title="anytext"
            placeholder="String"
            style={{ margin: "1rem 0" }}
            onChange={onChangeHandle}
          />
          <button type="submit">SUBMIT</button>
          <div>
            <button onClick={onClickHandle}>CLICK ME</button>
          </div>
        </form>
      </section>
    </div>
  );
}; */




const root = ReactDOM.createRoot(document.getElementById("root"));

/* root.render(<BookList />); */

root.render(<MyPage />);
