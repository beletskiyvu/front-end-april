(function () {


    var ALL_ARTICLES = [];
    var VIEW = document.getElementById('ui-view');

    function handlerError(error) {
        return new Error(error)
    }

    function createArticles(article) {
        var template = '<article> <h3 class="title"> <a href="/articles/' + article.id + '" > ' + article.title + ' </a></h3>' +
            '<div class="text-holder">' + '<p class="article-text">' + blog.Utils.formatArticleText(article.text) +
            '</p></div>' + '<div class="author-holder"><img src="' + article.photo + '" alt="">' +
            '<span class="author-name">' + article.author + '</span></div>' + '<div class="meta-data">' +
            '<span class="likes"><button data-article-id="' + article.id + '" >Likes : ' + article.likes +'</button> </span>' +
            '<span class="data"> Date of post: ' + blog.Utils.formatDate(article.createdAt) + '</span></div></article>'
        return template;
    }

    function createArticle(article) {
        var template = '<article> <h3 class="title"> ' + article.title + '</h3>' +
            '<div class="text-holder">' + '<p class="article-text">' + blog.Utils.formatArticleText(article.text) +
            '</p></div>' + '<div class="author-holder"><img src="' + article.photo + '" alt="">' +
            '<span class="author-name">' + article.author + '</span></div>' + '<div class="meta-data">' +
            '<span class="likes"><button data-article-id="' + article.id + '">Likes : ' + article.likes +'</button> </span>' +
            '<span class="data"> Date of post: ' + blog.Utils.formatDate(article.createdAt) + '</span></div></article>'
        return template;
    }

    function createAbout() {
        var template = `
<div class="about-head">
    <h2>By Me!</h2>
    <h3>Who am i?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quidem vel tempore harum non laboriosam, ex
        possimus voluptatibus quae exercitationem illum dolores eos doloremque soluta aut! Consequatur minima, totam
        maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quidem vel tempore harum non laboriosam, ex
        possimus voluptatibus quae exercitationem illum dolores eos doloremque soluta aut! Consequatur minima, totam
        maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quidem vel tempore harum non laboriosam, ex
        possimus voluptatibus quae exercitationem illum dolores eos doloremque soluta aut! Consequatur minima, totam
        maxime.</p>
</div>
        
        `;
        return template;
    }








//My Changes. Adding new page.
    function createPortfolio() {
        var template = `
    <div class="Portfolio">
    <h2>Portfolio</h2>
    <p>Not yet. If you're looking for my accomplished tasks, let you contact me via <a href='/contacts'>contacts</a></p> 
        `;
        return template;
    }

    function renderPortfolio() {
        var portfolioHolder = document.createElement('div');
        portfolioHolder.id = 'portfolio';

        VIEW.appendChild(portfolioHolder);

        portfolioHolder.innerHTML = createForm();
        blog.Utils.isLoading(false, 'spinner');
        document.getElementById("buttonAddArticle").onclick = sendArticle;
    }

    function createForm() {
        var template = `
    <h2>Add an article</h2>
    <div id="input-form">    
        <form>
            <input type="text" id="title" placeholder="Enter the title"></input>
            <input type="text" id="text" placeholder="Enter the text"></input>
            <input type="text" id="author" placeholder="Enter author name"></input>
            <input type="text" id="photo" placeholder="Enter photo url"></input>
            <button id="buttonAddArticle" type="button">Add article</button>
        </form>  
    </div>
        `;
        return template;
    }

    function sendArticle() {
        //console.log("Hello!");
        var dataFromTheForm = document.getElementById('input-form');
        var elementsOfTheForm = dataFromTheForm.getElementsByTagName('input');
        var input = [];
        for (var i = 0; i < elementsOfTheForm.length; i++) {
            input.push(elementsOfTheForm[i].value);
        }
        console.log(input);

        var objDataSentForArticleAdd = {};
            input1 = document.getElementById("title").value;
            input2 = document.getElementById("text").value;
            input3 = document.getElementById("author").value;
            input4 = document.getElementById("photo").value;

        objDataSentForArticleAdd.title = input1;
        objDataSentForArticleAdd.text = input2;
        objDataSentForArticleAdd.author = input3;
        objDataSentForArticleAdd.photo = input4;

console.log(objDataSentForArticleAdd);

var options = {
            method: "POST",
            url: '/article/create/',
            async: true,
            dataType: "json",
            body: objDataSentForArticleAdd
}

blog.Utils.sendRequest(options, function (error, data) {
            if (error) throw handlerError(error);
           console.log(data);

        })
    }


//End of my changes.







    function createContacts() {
        var template = `
<div class="about-head">
    <h2>How to contact with me?</h2>
    <h3>Easy!</h3>
    <ul>
    <li>Phone: +2355134</li>
    <li>Email: byme@gmail.com</li>
    <li>Twitter: @bymne</li>
    <li>Skype: byme</li>
    </ul>  
        `;

        return template;
    }

    function renderAbout() {
        var aboutHolder = document.createElement('div');
        aboutHolder.id = 'about';

        VIEW.appendChild(aboutHolder);

        aboutHolder.innerHTML = createAbout();
        blog.Utils.isLoading(false, 'spinner');
    }

    function renderContact() {
        var aboutHolder = document.createElement('div');
        aboutHolder.id = 'about';

        VIEW.appendChild(aboutHolder);

        aboutHolder.innerHTML = createContacts();
        blog.Utils.isLoading(false, 'spinner');
    }

    function renderArticles() {
        var params = {
            method: "GET",
            url: "/articles",
            async: true,
            dataType: "json"
        };

        blog.Utils.isLoading(true, 'spinner');

        blog.Utils.sendRequest(params, function (error, data) {

            var articlesHolder = document.createElement('div');
            articlesHolder.id = 'articles';
            articlesHolder.addEventListener('click', setLike);

            VIEW.appendChild(articlesHolder);

            if (error) throw handlerError(error);

            ALL_ARTICLES = data;

            var i = 0,
                dataLen = data.length,
                articles = [];

            for (; i < dataLen; i += 1) {
                articles.push(createArticles(data[i]))
            }

            setTimeout(function () {
                blog.Utils.isLoading(false, 'spinner');
                articlesHolder.innerHTML = articles.join('');
            }, 100)
        })
    }

    function renderArticleById(id) {
        var params = {
            method: "GET",
            url: "/articles/" + id,
            async: true
        };

        blog.Utils.isLoading(true, 'spinner');

        blog.Utils.sendRequest(params, function(error, data) {
            if (error) throw handlerError(error);

            var articleHolder = document.createElement('div');
            articleHolder.id = 'article';
            articleHolder.addEventListener('click', setLike);

            VIEW.appendChild(articleHolder);

            ALL_ARTICLES.push(data);
            blog.Utils.isLoading(false, 'spinner');
            articleHolder.innerHTML = createArticle(data);

        })

    }

    function setLike(e) {
        if (e.target.tagName != 'BUTTON') return;
        var articleId = +e.target.dataset.articleId;
        var article = ALL_ARTICLES.filter(function(el) {
            console.log(el);
            return el.id === articleId;
        })[0];
        article.likes++;

        var options = {
            method: "PUT",
            url: '/articles/' + article.id,
            async: true,
            dataType: "json",
            body: article
        };

        blog.Utils.sendRequest(options, function (error, data) {
            if (error) throw handlerError(error);
            e.target.textContent = 'Likes : ' + article.likes;

        })
    }

    function init() {
        console.log(blog.Utils);
        var route = window.location.pathname.match(/\/[a-z]+/i);

        if (!route) {
            window.location = 'http://localhost:8000/blog';
        }

        switch (route[0]) {
            case '/blog':
                renderArticles();
                break;
            case '/about':
                renderAbout();
                break;
            case '/contacts':
                renderContact();
                break;
            case '/articles':
                var id = route.input.match(/[0-9]+/);
                renderArticleById(id);
                break;
            case '/portfolio':
                renderPortfolio(); 
                break;                  
            default:
                window.location = 'http://localhost:8000/blog';
        }

    }

    init();


})();
