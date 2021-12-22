import Footer from './components/Footer';
import { Logo, Menu } from './components/Header';
import Panel from './components/Panel';
import './css/style.css';




function App() {
  // let picImg = { backgroundImage: "url('img/member1.jpg')" }

  return (
    <div className="App">
      <figure>
        <Logo></Logo>
        <Menu></Menu>

        <section>

          <Panel></Panel>;


          {/* <article>
            <div className="inner">
              <img src={imgURL} alt="" />
              {name1}
            </div>
          </article>
          <article>
            <div className="inner">Emma</div>
          </article>
          <article>
            <div className="inner">Paul</div>
          </article>
          <article>
            <div className="inner">Lena</div>
          </article>
          <article>
            <div className="inner">You</div>
          </article>
          <article>
            <div className="inner">crush</div>
          </article>
          <article>
            <div className="inner">Gray</div>
          </article>
          <article>
            <div className="inner">Ali</div>
          </article> */}
        </section>

        <Footer></Footer>
      </figure>
    </div>
    // <figure>
    //   <Header></Header>
    //   <section>
    //     <article>
    //       <div className="inner">
    //         <div className="pic" style={picImg}>
    //           <div className="dot"></div>
    //         </div>
    //         <div className="text">
    //           <h2>Title</h2>
    //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    //         </div>

    //       </div>
    //     </article>

    //   </section>

    //   <Footer></Footer>
    // </figure >
  );
}

export default App;
