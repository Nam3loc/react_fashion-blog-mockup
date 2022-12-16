import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <div className='header'>
          <h1 class="blog-title">Sartre's List</h1>
          <h4 class="secondary-blog-title">Better-Dressed People</h4>
          <br />

          <nav className='top-nav'>
            <ul><a href="#">Women's</a></ul>
            <ul><a href="#">Men's</a></ul>
            <ul><a href="#">On the Street</a></ul>
            <ul><a href="#">The Catwalk</a></ul>
            <ul><a href="#">AdWatch</a></ul>
            <ul><a href="#">About</a></ul>
          </nav>
          <br />
        </div>

        <div className='main'>
          <span><h4 class="article-date">11/12/20</h4></span>
          <br />

          <h2 class="article-title">On the Street in Brooklyn</h2>
          <br />
          <br />
          <img class="img" src="https://ps-rtt-sei.herokuapp.com/fashionblog/blog-image-1.jpg" alt="Picture of woman in red dress walking down a street" />
          <br />
          <p class="article-text">
            <span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, libero nesciunt iusto quaerat deleniti blanditiis. Molestias repellat repellendus earum cum corporis odio vel, unde veniam maxime quam quia dolores a?
            Ratione labore totam autem, dolore, dolorem praesentium dignissimos corporis saepe nesciunt maiores necessitatibus unde voluptas modi eligendi quia. Distinctio officia atque iste nam hic inventore id totam, amet possimus quod?
            Nemo optio eligendi enim, porro illo nesciunt quisquam cum a odit alias! Tempore unde blanditiis alias aliquid quam, vero enim deserunt aut voluptatem, error aliquam sed quos iusto quo natus?
            Reiciendis, perferendis ducimus beatae sint delectus quas facere obcaecati doloremque molestias ut libero, officiis alias tempore accusantium debitis nihil facilis earum aspernatur commodi tempora blanditiis asperiores? Repellendus praesentium provident a.
            In soluta rerum placeat amet libero rem provident dignissimos possimus quibusdam eos ab sapiente iste fugit excepturi alias, cumque ipsa consequuntur fuga enim pariatur! Cum eius nemo exercitationem ratione nostrum?
          </p>
          <h6 class="continues-tag">Continues ...</h6>

          <br />
          <br />
          <hr />
          <br />
          <br />

          <span><h4 class="article-date">11/12/20</h4></span>
          <br />
          <h2 class="article-title">Vintage in Vogue</h2>
          <br />
          <br />
          <img class="img" src="https://ps-rtt-sei.herokuapp.com/fashionblog/blog-image-2.jpg" alt="Picture of three models posing" />
          <br />
          <p class="article-text">
            <span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, libero nesciunt iusto quaerat deleniti blanditiis. Molestias repellat repellendus earum cum corporis odio vel, unde veniam maxime quam quia dolores a?
            Ratione labore totam autem, dolore, dolorem praesentium dignissimos corporis saepe nesciunt maiores necessitatibus unde voluptas modi eligendi quia. Distinctio officia atque iste nam hic inventore id totam, amet possimus quod?
            Nemo optio eligendi enim, porro illo nesciunt quisquam cum a odit alias! Tempore unde blanditiis alias aliquid quam, vero enim deserunt aut voluptatem, error aliquam sed quos iusto quo natus?
            Reiciendis, perferendis ducimus beatae sint delectus quas facere obcaecati doloremque molestias ut libero, officiis alias tempore accusantium debitis nihil facilis earum aspernatur commodi tempora blanditiis asperiores? Repellendus praesentium provident a.
            In soluta rerum placeat amet libero rem provident dignissimos possimus quibusdam eos ab sapiente iste fugit excepturi alias, cumque ipsa consequuntur fuga enim pariatur! Cum eius nemo exercitationem ratione nostrum?
          </p>
          <h6 class="continues-tag">Continues ...</h6>
          <br />
          <br />
        </div>

        <div className='footer'>
          <nav class="bottom-nav">
            <ul><a class="bottom-nav-styling" href="#">Women's</a></ul>
            <ul><a class="bottom-nav-styling" href="#">Men's</a></ul>
            <ul><a class="bottom-nav-styling" href="#">On the Street</a></ul>
            <ul><a class="bottom-nav-styling" href="#">The Catwalk</a></ul>
            <ul><a class="bottom-nav-styling" href="#">AdWatch</a></ul>
            <ul><a class="bottom-nav-styling" href="#">About</a></ul>
            <ul><a class="bottom-nav-styling" href="#">Tips</a></ul>
          </nav>
          <br />
          <p class="copyright">&copy; Coleman Escue Development, LLX</p>
        </div>

      </div>
    </>
  );
}

export default App;
