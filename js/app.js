

$(function () {
  var url = "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=8e8dd47ad27443f6b20b2fa5f7cad981"


  $.get(url, function (result) {
    
    result.articles.forEach(el => {
    
      let b = `<section class="container">
      <a href="#"><h1>Feedr</h1></a>
      <nav>
        <ul>
          <li><a href="${el.source.id}">News Source: <span>${el.source.name}</span></a>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
          </li>
        </ul>
        <section id="search">
          <input type="text" name="name" value="">
          <a href="#"><img src="images/search.png" alt="" /></a>
        </section>
      </nav>
      <div class="clearfix"></div>
    </section>`

      //$("section").append(b)

      let a = ` 
      
      <ul>
        <li><a href="">News Source: <span>${el.source.name}</span></a>
      </ul>      
      <article class="article">
        <section class="featuredImage">
          <img id="" src="${el.urlToImage}" alt="" />
        </section>
        <section class="articleContent">
          <a href="#"><h3>${el.title}</h3></a>
          <h6>Lifestyle</h6>
        </section>
        <section class="impressions">
        ${el.author}
        </section>
        <div class="clearfix"></div>
      </article>
    `

      $("#main").append(a)

      //  $(".article").append( $(".articleContent").append("<a>" + "<h3>" + element.title + "</h3>" + "</a>"))

    })

  })
})
