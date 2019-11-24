'use strict';

// Classes
// Blueprint for all Book objects

// signUpForm signUpFirstName signUpLastName signUpUsername signUpPassword signUpBirthday signUpAddress signUpPostCode signUpContactNumber
// signUpMedicalHistory
// document.getElementById('signUpForm').addEventListener('click', async function(event){
//     event.preventDefault();
    
//     try{
//       let firstname_ = document.getElementById('signUpFirstName').value;
//       let lastname_ = document.getElementById('signUpLastName').value;
//       let username_ = document.getElementById('signUpUsername').value;
//       let password_ = document.getElementById('signUpPassword').value;
//       let birthday_ = document.getElementById('signUpBirthday').value;
//       let address_ = document.getElementById('signUpAddress').value;
//       let postCode_ = document.getElementById('signUpPostCode').value;
//       let contactNumber_ = document.getElementById('signUpContactNumber').value;
//       let medicalHistory_ = document.getElementById('signUpMedicalHistory').value;
    
//       let response = await fetch('localhost:9595/signup',
//         {
//           method: "POST",
//           headers: {
//           "Content-Type": "application/x-www-form-urlencoded"},
//           body:`firstname=${firstname_}&lastname=${lastname_}&username=${username_}&password=${password_}&birthday=${birthday_}&address=${address_}&postCode=${postCode_}&contactNumber=${contactNumber_}&medicalHistory=${medicalHistory_}`
          
//         });
//       if(!response.ok){
//         throw new Error("problem: " + response.code);
//       }
//       let body = await response.text();
//       let list1 = JSON.parse(body);
//       alert(list1[0])
//       } 
//     catch (error){
//       alert ("problem: " + error);
//     }});



    document.getElementById('signUpForm').addEventListener('submit', async function(event){
      event.preventDefault();
      
      try{
        let firstname_ = document.getElementById('signUpFirstName').value;
        let lastname_ = document.getElementById('signUpLastName').value;
        let username_ = document.getElementById('signUpUsername').value;
        let password_ = document.getElementById('signUpPassword').value;
        let birthday_ = document.getElementById('signUpBirthday').value;
        let address_ = document.getElementById('signUpAddress').value;
        let postCode_ = document.getElementById('signUpPostCode').value;
        let contactNumber_ = document.getElementById('signUpContactNumber').value;
        let medicalHistory_ = document.getElementById('signUpMedicalHistory').value;
      
        let response = await fetch('http://127.0.0.1:9595/signup',
          {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"},
            body:`firstname=${firstname_}&lastname=${lastname_}&username=${username_}&password=${password_}&birthday=${birthday_}&address=${address_}&postCode=${postCode_}&contactNumber=${contactNumber_}&medicalHistory=${medicalHistory_}`
            
          });
        if(!response.ok){
          throw new Error("problem: " + response.code);
        }
        let body = await response.text();
        let list1 = JSON.parse(body);
        document.getElementById('alertSection').innerHTML += '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>You have signed up!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        document.getElementById('signUpFirstName').value = '';
        document.getElementById('signUpLastName').value = '';
        document.getElementById('signUpUsername').value = '';
        document.getElementById('signUpPassword').value = '';
        document.getElementById('signUpBirthday').value = '';
        document.getElementById('signUpAddress').value = '';
        document.getElementById('signUpPostCode').value = '';
        document.getElementById('signUpContactNumber').value = '';
        document.getElementById('signUpMedicalHistory').value = '';

        $('html,body').scrollTop(0);
        } 
      catch (error){
        document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, sign up was unsuccessful.</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        $('html,body').scrollTop(0);
      }});
































// class Book
// {
//     constructor(t, g, gn, ln, i)
//     {
//         this.title = t;
//         this.genre = g;
//         this.givenName = gn;
//         this.lastName = ln;
//         this.intro = i;
//     }

//     getTitle()
//     {
//         return this.title;
//     }

//     getGenre()
//     {
//         return this.genre;
//     }

//     getGivenName()
//     {
//         return this.givenName;
//     }

//     getLastName()
//     {
//         return this.lastName;
//     }

//     setTitle(t)
//     {
//         this.title = t;
//     }

//     setGenre(g)
//     {
//         this.genre = g;
//     }

//     setGivenName(gn)
//     {
//         this.givenName = gn;
//     }

//     setLastName(ln)
//     {
//         this.lastName = ln;
//     }

//     setIntro(i)
//     {
//         this.intro = i;
//     }
// }

// // Blueprint for all Review objects
// class Review
// {
//     constructor(r, b, rt, rc)
//     {
//         this.reviewer = r;
//         this.book = b;
//         this.reviewTitle = rt;
//         this.reviewContent = rc;
//     }

//     getReviewer()
//     {
//         return this.reviewer;
//     }

//     getBook()
//     {
//         return this.book;
//     }

//     getContent()
//     {
//         return this.content;
//     }

//     setReviewer(r)
//     {
//         this.reviewer = r;
//     }

//     setBook(b)
//     {
//         this.book = b;
//     }

//     setReviewTitle(rt)
//     {
//         this.reviewTitle = rt;
//     }

//     setReviewContent(rc)
//     {
//         this.reviewContent = rc;
//     }
// }

// async function clear(a)
// {
//     for(let i = 0; i < a.length; i++)
//     {
//         document.getElementById(a[i]).innerHTML = '';
//     }
// }



// //Adds event listners to the search forms to list all books.
// async function search(type, keyword, filterGenre, filterAuthor)
// {
//     let path = '';
//     if(type == 'book')
//     {
//         path += 'http://localhost:9595/search?keyword=' + keyword + '&genre=' + filterGenre + '&author=' + filterAuthor;
//         document.getElementById('searchSectionTitle').innerHTML = 'Books';
//     }
//     else
//     {
//         path += 'http://localhost:9595/search/review?keyword=' + keyword + '&genre=' + filterGenre + '&author=' + filterAuthor;
//         document.getElementById('searchSectionTitle').innerHTML = 'Reviews';
//     }
//     try
//     {
//         let response = await fetch(path);
//         let body = await response.text();
//         let content = '';
//         let catalogue = JSON.parse(body);

//         if(catalogue.length == 0)
//         {
//             content += '<h2 class="text-muted">Sorry, no match yet :(</h2>';
//         }
//         else
//         {
//             if(type == 'book')
//             {
//                 for(let i = 0; i < catalogue.length; i++)
//                 {
//                     let detail = 'http://localhost:9595/search?keyword=' + catalogue[i].title + '&genre=' + catalogue[i].genre + '&author=' + catalogue[i].lastName + catalogue[i].givenName;
//                     content += '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="' 
//                     + detail
//                     + '"><b id="' + detail + '">' 
//                     + catalogue[i].title 
//                     + '</b><span class="badge badge-info badge-pill" id="'+ detail +'">'
//                     + catalogue[i].genre 
//                     + '</span></a>';
//                 }
//             }
//             else
//             {
//                 for(let i = 0; i < catalogue.length; i++)
//                 {
//                     let detail = 'http://localhost:9595/search/review?keyword=' + catalogue[i].book.title + '&genre=' + catalogue[i].book.genre + '&author=' + catalogue[i].book.lastName + catalogue[i].book.givenName + '&reviewTitle=' + catalogue[i].reviewTitle + '&reviewer=' + catalogue[i].reviewer;
//                     content += '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="' 
//                     + detail 
//                     + '"><b id="' + detail + '">'  
//                     + catalogue[i].reviewTitle 
//                     + '</b><small id="'+ detail +'"> '
//                     + catalogue[i].book.title 
//                     + '</small></a>';
//                 }
//             }
//         }

//         document.getElementById('searchResult').innerHTML = content;
//         clear(['slogan', 'itemDetail', 'relatedDetailHeader', 'relatedDetailList', 'bookFormTitle', 'bookForm', 'reviewFormTitle', 'reviewForm', 'reviewDeleteFormTitle', 'reviewDeleteForm', 'introduction', 'about']);

//     } catch(error)
//     {
//         if(error == 'TypeError: Failed to fetch')
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, BookHub is disconnected from the server. </strong>Please try to restart the server.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, there\'s been an error: </strong>' + error +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }  
//     }
// }

// async function searchWithNav()
// {
//     let keyword = document.getElementById('keywordNav').value;
//     let filterGenre = document.getElementById('filterGenreNav').value;
//     let filterAuthor = document.getElementById('filterAuthorNav').value;
//     search(document.getElementById('typeNav').value, keyword, filterGenre, filterAuthor);
// }

// async function searchWithMain() {
//     let keyword = document.getElementById('keywordMain').value;
//     let filterGenre = document.getElementById('filterGenreMain').value;
//     let filterAuthor = document.getElementById('filterAuthorMain').value;
//     search(document.getElementById('typeMain').value, keyword, filterGenre, filterAuthor);
// }

// async function revitaliseSearchMain()
// {
//     if(document.getElementById('searchSectionTitle').innerHTML == '')
//     {
//         document.getElementById('searchSectionTitle').innerHTML = 'Books';
//         document.getElementById('searchMainControl').innerHTML = document.getElementById('searchMainControl').innerHTML.replace('<div class="input-group-append">','<input type="text" class="form-control" style="border-color: lightgrey; border-radius: 0px;" placeholder="keywords..." id="keywordMain"><div class="input-group-append">');
//         document.getElementById('typeMainContainer').innerHTML = '<select class="custom-select" id="typeMain" style="border-color: lightgrey; border-top-right-radius: 0px; border-bottom-right-radius: 0px;"><option value="book">Book</option><option value="review">Review</option></select>';
//         document.getElementById('filterContainer').innerHTML = '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="border-color: lightgrey; border-radius: 0px;"><span class="caret">Filters</span></button><div class="dropdown-menu dropdown-menu-right" style="padding: 10px;" role="menu"><form class="form-horizontal" role="form"><div class="form-group"><label>Genre</label><select class="form-control" id="filterGenreMain"></select></div></form><form class="form-horizontal" role="form"><div class="form-group"><label>Author</label><select class="form-control" id="filterAuthorMain"></select></div></form></div>';
//         document.getElementById('searchMain').innerHTML = '<button class="btn btn-outline-success" style="border-top-left-radius: 0px; border-bottom-left-radius: 0px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg></button>';   

//         loadMainFilter();

//         document.getElementById('searchMain').addEventListener('click', async function(event){
//             event.preventDefault();
//             searchWithMain();
//         });
//         document.getElementById('typeMainContainer').addEventListener('change', async function(event){
//             event.preventDefault();
//             searchWithMain();
//         });
//         document.getElementById('filterContainer').addEventListener('change', async function(event){
//             event.preventDefault();
//             searchWithMain();
//         });
//     } 
// }

// async function loadNav()
// {
//     let responseGenre = await fetch('http://localhost:9595/search/byGenre');
//     let bodyGenre = await responseGenre.text();
//     let genreList = JSON.parse(bodyGenre);
//     document.getElementById('genreList').innerHTML = '';
//     let filterGenre = '<option value="" selected="selected">All</option>';
//     let filterAuthor = '<option value="" selected="selected">All</option>';
//     for(let i = 0; i < genreList.length; i++)
//     {
//         document.getElementById('genreList').innerHTML += '<a class="dropdown-item" href="" id="' + genreList[i] + '">' + genreList[i] + '</a>';
//         filterGenre += '<option value="' + genreList[i] + '">' + genreList[i] + '</option>';
//     }

//     let responseAuthor = await fetch('http://localhost:9595/search/byAuthor');
//     let bodyAuthor = await responseAuthor.text();
//     let authorList = JSON.parse(bodyAuthor);
//     document.getElementById('authorList').innerHTML = '';
//     for(let i = 0; i < authorList.length; i++)
//     {
//         document.getElementById('authorList').innerHTML += '<a class="dropdown-item" href="" id="' + authorList[i][0] + authorList[i][1] +'">' + authorList[i][0] + ', ' + authorList[i][1] + '</a>';
//         filterAuthor += '<option value="' + authorList[i][0] + authorList[i][1] + '">' + authorList[i][0] + ', ' + authorList[i][1] + '</option>';
//     }

//     document.getElementById('filterGenreNav').innerHTML = filterGenre;
//     document.getElementById('filterAuthorNav').innerHTML = filterAuthor;
// }

// async function loadMainFilter()
// {
//     let responseGenre = await fetch('http://localhost:9595/search/byGenre');
//     let bodyGenre = await responseGenre.text();
//     let genreList = JSON.parse(bodyGenre);
//     document.getElementById('genreList').innerHTML = '';
//     let filterGenre = '<option value="" selected="selected">All</option>';
//     let filterAuthor = '<option value="" selected="selected">All</option>';
//     for(let i = 0; i < genreList.length; i++)
//     {
//         document.getElementById('genreList').innerHTML += '<a class="dropdown-item" href="" id="' + genreList[i] + '">' + genreList[i] + '</a>';
//         filterGenre += '<option value="' + genreList[i] + '">' + genreList[i] + '</option>';
//     }

//     let responseAuthor = await fetch('http://localhost:9595/search/byAuthor');
//     let bodyAuthor = await responseAuthor.text();
//     let authorList = JSON.parse(bodyAuthor);
//     document.getElementById('authorList').innerHTML = '';
//     for(let i = 0; i < authorList.length; i++)
//     {
//         document.getElementById('authorList').innerHTML += '<a class="dropdown-item" href="" id="' + authorList[i][0] + authorList[i][1] +'">' + authorList[i][0] + ', ' + authorList[i][1] + '</a>';
//         filterAuthor += '<option value="' + authorList[i][0] + authorList[i][1] + '">' + authorList[i][0] + ', ' + authorList[i][1] + '</option>';
//     }

//     document.getElementById('filterGenreMain').innerHTML = filterGenre;
//     document.getElementById('filterAuthorMain').innerHTML = filterAuthor;
// }

// // Loads in list of authors and genres and adds them to respective links and select options
// document.addEventListener('DOMContentLoaded', async function(event){
//     // Loads all book genres stored into the genre dropdown menu in the navbar and the two search filters
//     loadNav();
//     loadMainFilter();

//     // Update user status  
//     let response = await fetch('http://localhost:9595/user');
//     let body = await response.text();
//     if(body)
//     {
//         document.getElementById('username').innerHTML = '<h6>Hello ' + body + '</h6>';
//         document.getElementById('login').innerHTML = '';
//         document.getElementById('logout').innerHTML = '<form class="form-inline my-2 my-lg-0" action="/logout" method="get"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Log Out</button></form>';
//     }
//     else
//     {
//         document.getElementById('username').innerHTML = '';
//         document.getElementById('login').innerHTML = '<form class="form-inline my-2 my-lg-0" action="/auth/github" method="get"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button></form>';
//         document.getElementById('logout').innerHTML = '';
//     }
// });

// // Produce a table of book results when the search button in the main search form is clicked.
// document.getElementById('searchMain').addEventListener('click', async function(event){
//     event.preventDefault();
//     searchWithMain();
// });

// // Produce a table of book results when the search button in the navbar search form is clicked.
// document.getElementById('searchNav').addEventListener('click', async function(event){
//     event.preventDefault();
//     // Revive main search bar and load in details
//     revitaliseSearchMain();
//     searchWithNav();
// });

// // Produce a table of book reviews when the review link is clicked.
// document.getElementById('reviewList').addEventListener('click', async function(event){
//     event.preventDefault();
//     // Revive main search bar and load in details
//     revitaliseSearchMain(); 
//     search('review','', '', '');
// });

// //
// document.getElementById('typeMainContainer').addEventListener('change', async function(event){
//     event.preventDefault();
//     searchWithMain();
// });

// document.getElementById('filterContainer').addEventListener('change', async function(event){
//     event.preventDefault();
//     searchWithMain();
// });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

// document.getElementById('typeNav').addEventListener('change', async function(event){
//     event.preventDefault();
//     // Revive main search bar and load in details
//     revitaliseSearchMain();
//     searchWithNav();
// });

// document.getElementById('filterGenreNav').addEventListener('change', async function(event){
//     event.preventDefault();
//     // Revive main search bar and load in details
//     revitaliseSearchMain();
//     searchWithNav();
// });

// document.getElementById('filterAuthorNav').addEventListener('change', async function(event){
//     event.preventDefault();
//     // Revive main search bar and load in details
//     revitaliseSearchMain();
//     searchWithNav();
// });

// // Listens to clicks on the genre dropdown menu on navbar and searches book by selected genre
// document.getElementById('genreList').addEventListener('click', async function(event){
//     event.preventDefault();
//     if(event.target.matches('.dropdown-item')){
//         // Revive main search bar and load in details
//         revitaliseSearchMain();
//         search('book', '', event.target.innerHTML, '');
//     }
// });

// // Listens to clicks on the author dropdown menu on navbar and searches book by selected author
// document.getElementById('authorList').addEventListener('click', async function(event){
//     event.preventDefault();
//     if(event.target.matches('.dropdown-item')){
//         // Revive main search bar and load in details
//         revitaliseSearchMain();
//         search('book', '', '', event.target.id);
//     }
// });

// document.getElementById('aboutButton').addEventListener('click', async function(event){
//     event.preventDefault();
//     revitaliseSearchMain();
//     document.getElementById('about').innerHTML = '<h2>About</h2><p>BookHub is a place designed to find and share new books. It allows people to search up books and reviews and is a good way for people to find their next book to read. Browse through the app via the search boxes and links to find your book or review and if you log in with Github, you may also contribute by adding your books and reviews to the BookHub community!</p>';
//     clear(['slogan', 'searchResult', 'itemDetail', 'relatedDetailHeader', 'relatedDetailList', 'bookFormTitle', 'bookForm', 'reviewFormTitle', 'reviewForm', 'reviewDeleteFormTitle', 'reviewDeleteForm', 'introduction']);
// });

// async function displayDetail(event)
// {
//     if(event.target.id.substring(0,4) == 'http')
//     {
//         try
//         {
//             let response = await fetch(event.target.id);
//             let body = await response.text();
//             let books = JSON.parse(body);

//             if(books[0].title != undefined)
//             {
//                 let content = '<div class="card"><div class="card-header"><h4>' + books[0].title + '</h4><span class="badge badge-info badge-pill">' + books[0].genre +'</span><small> by ' + books[0].lastName + ', ' + books[0].givenName +'</small></div><div class="card-body">' + books[0].intro +'</div></div>';
//                 document.getElementById('itemDetail').innerHTML = content;
//                 document.getElementById('searchSectionTitle').innerHTML = 'Books';
//                 clear(['slogan','searchResult', 'bookFormTitle', 'bookForm', 'reviewFormTitle', 'reviewForm', 'reviewDeleteFormTitle', 'reviewDeleteForm','introduction', 'about']);


//                 let relatedResponse = await fetch(event.target.id.substring(0, 28) + '/review' + event.target.id.substring(28));
//                 let relatedBody = await relatedResponse.text();
//                 let relatedCatalogue = JSON.parse(relatedBody);
//                 let relatedContent = '';

//                 if(relatedCatalogue.length == 0)
//                 {
//                     relatedContent = '<h2 class="text-muted">Sorry, no reviews for this book yet :(</h2>';
//                 }
//                 for(let i = 0; i < relatedCatalogue.length; i++)
//                 {
//                     let detail = 'http://localhost:9595/search/review?keyword=' + relatedCatalogue[i].book.title + '&genre=' + relatedCatalogue[i].book.genre + '&author=' + relatedCatalogue[i].book.lastName + relatedCatalogue[i].book.givenName + '&reviewTitle=' + relatedCatalogue[i].reviewTitle + '&reviewer=' + relatedCatalogue[i].reviewer;
//                     relatedContent += '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="' 
//                     + detail 
//                     + '"><b id="' + detail + '">'  
//                     + relatedCatalogue[i].reviewTitle 
//                     + '</b><small id="'+ detail +'">by '
//                     + relatedCatalogue[i].reviewer 
//                     + '</small></a>';
//                 }
//                 document.getElementById('relatedDetailHeader').innerHTML = '<h4>Related Reviews</h4>';
//                 document.getElementById('relatedDetailList').innerHTML = relatedContent;

//             }
//             else
//             {
//                 let content = '<div class="card"><div class="card-header"><h4>' + books[0].reviewTitle + '</h4><small>by ' + books[0].reviewer +'</small>';
//                 let status = await fetch('http://localhost:9595/user');
//                 let statusContent = await status.text();
//                 if(statusContent == books[0].reviewer)
//                 {
//                     content += '<div><a id="deleteOption" href="#">Delete</a></div>';
//                 }
//                 content += '</div><div class="card-body">' + books[0].reviewContent + '</div></div>';
                
//                 document.getElementById('itemDetail').innerHTML = content;
//                 document.getElementById('searchSectionTitle').innerHTML = 'Reviews';
//                 clear(['slogan','searchResult', 'bookFormTitle', 'bookForm', 'reviewFormTitle', 'reviewForm', 'reviewDeleteFormTitle', 'reviewDeleteForm', 'introduction', 'about']);

//                 let relatedResponse = await fetch(event.target.id.substring(0, 28) + event.target.id.substring(35));
//                 let relatedBody = await relatedResponse.text();
//                 let relatedCatalogue = JSON.parse(relatedBody);
//                 let relatedContent = '';
            
//                 if(relatedCatalogue.length == 0)
//                 {
//                     relatedContent = '<h2 class="text-muted">Sorry, no reviews for this book yet :(</h2>';
//                 }
//                 for(let i = 0; i < relatedCatalogue.length; i++)
//                 {
//                     let detail = 'http://localhost:9595/search?keyword=' + relatedCatalogue[i].title + '&genre=' + relatedCatalogue[i].genre + '&author=' + relatedCatalogue[i].lastName + relatedCatalogue[i].givenName;
//                     relatedContent += '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="' 
//                     + detail
//                     + '"><b id="' + detail + '">' 
//                     + relatedCatalogue[i].title 
//                     + '</b><span class="badge badge-info badge-pill" id="'+ detail +'">'
//                     + relatedCatalogue[i].genre 
//                     + '</span></a>';
//                 }
//                 document.getElementById('relatedDetailHeader').innerHTML = '<h4>Related Book</h4>';
//                 document.getElementById('relatedDetailList').innerHTML = relatedContent;

//                 // Adds Delete's Event Listner

//                 if(statusContent == books[0].reviewer)
//                 {
//                     document.getElementById('deleteOption').addEventListener('click', async function(event){
//                         let status = await fetch('http://localhost:9595/user');
//                         let statusContent = await status.text();
//                         if(statusContent)
//                         {
//                             document.getElementById('searchMainControl').innerHTML = document.getElementById('searchMainControl').innerHTML.replace('<input type="text" class="form-control" style="border-color: lightgrey; border-radius: 0px;" placeholder="keywords..." id="keywordMain">', '');
//                             clear(['slogan', 'searchSectionTitle', 'typeMainContainer', 'filterContainer', 'searchMain', 'searchResult',
//                             'itemDetail', 'relatedDetailHeader', 'relatedDetailList', 'bookFormTitle', 'bookForm', 'reviewFormTitle', 'reviewForm', 'introduction', 'about']);
//                             document.getElementById('reviewDeleteFormTitle').innerHTML = '<h2>Delete Your Review</h2>';
                            
//                             let detail = 'http://localhost:9595/search/review?keyword=' + books[0].book.title + '&genre=' + books[0].book.genre + '&author=' + books[0].book.lastName + books[0].book.givenName + '&reviewTitle=' + books[0].reviewTitle + '&reviewer=' + books[0].reviewer;
//                             document.getElementById('reviewDeleteForm').innerHTML = '<h3>Do you confirm the deletion of your following review?</h3><form action="/delete/review" method="post" id=\'' + detail +'\'><div class="form-row"><div class="col-12 col-md-6 mb-3"><label for="reviewDeleteTitle">Review Title</label><input type="text" class="form-control" id="reviewDeleteTitle" value="' + books[0].reviewTitle +'" disabled></div><div class="col-12 col-md-6 mb-3"><label for="reviewDeleteBook">Book to be Reviewed</label><select class="form-control" id="reviewDeleteBook" disabled><option value=\'' + JSON.stringify(books[0].book) +'\'>' + books[0].book.title +'</option></select></div></div><div class="form-row"><div class="col-12 mb-3"><label for="reviewDeleteContent">Review</label><textarea class="form-control" id="reviewDeleteContent" disabled value="' + books[0].reviewContent +'">' + books[0].reviewContent + '</textarea></div></div><button class="btn btn-danger" type="submit">Delete Your Review</button></form><br>';
//                         }
//                         else
//                         {
//                             document.getElementById('alertSection').innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry,</strong> You need to login for this action.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//                             $('html,body').scrollTop(0);
//                         }
//                     });
//                 }
//             }
        
//         } catch(error)
//         {
//             if(error == 'TypeError: Failed to fetch')
//             {
//                 document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, BookHub is disconnected from the server. </strong>Please try to restart the server.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//                 $('html,body').scrollTop(0);
//             }
//             else
//             {
//                 document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, there\'s been an error: </strong>' + error +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//                 $('html,body').scrollTop(0);
//             }
//         }
//     }
// }

// document.getElementById('searchResult').addEventListener('click', async function(event) {
//     event.preventDefault();
//     displayDetail(event);
// });

// document.getElementById('relatedDetailList').addEventListener('click', async function(event) {
//     event.preventDefault();
//     displayDetail(event);
// });

// document.getElementById('addBook').addEventListener('click', async function(event){
//     event.preventDefault();
//     try
//     {
//         let status = await fetch('http://localhost:9595/user');
//         let statusContent = await status.text();
//         if(statusContent)
//         {
//             // Displays the add book form
//             document.getElementById('bookFormTitle').innerHTML = '<h2>Submit Your Book</h2>';
//             document.getElementById('bookForm').innerHTML = '<form class="needs-validation" action="/submit/book" method="post"><div class="form-row"><div class="col-12 col-md-6 mb-3"><label for="bookTitle">Title *</label><input type="text" class="form-control" id="bookTitle" placeholder="Title" required></div><div class="col-12 col-md-6 mb-3"><label for="bookGenre">Genre *</label><select class="form-control" id="bookGenre" required><option value="Adventure">Adventure</option><option value="Classics">Classics</option><option value="Fantasy">Fantasy</option><option value="Historical Fiction">Historical Fiction</option><option value="Horror">Horror</option><option value="Humor">Humor</option><option value="Magical Realism">Magical Realism</option><option value="Mystery">Mystery</option><option value="Mythology">Mythology</option><option value="Romance">Romance</option><option value="Science Fiction">Science Fiction</option><option value="Short Story">Short Story</option><option value="Autobiography">Autobiography</option><option value="Biography">Biography</option><option value="Journalism">Journalism</option><option value="Reference Book">Reference Book</option></select></div></div><div class="form-row"><div class="col-12 col-md-6 mb-3"><label for="bookAuthorLN">Author\'s Last Name *</label><input type="text" class="form-control" id="bookAuthorLN" placeholder="Author\'s last name" required></div><div class="col-12 col-md-6 mb-3"><label for="bookAuthorGN">Author\'s Given Name *</label><input type="text" class="form-control" id="bookAuthorGN" placeholder="Author\'s given name" required></div></div><div class="form-row"><div class="col-12 mb-3"><label for="bookIntro">Introduction</label><textarea class="form-control" id="bookIntro"></textarea></div></div><button class="btn btn-success" type="submit">Submit Your Book</button></form><br>';
                    
//             // Collapses all irrelavent parts
//             document.getElementById('searchMainControl').innerHTML = document.getElementById('searchMainControl').innerHTML.replace('<input type="text" class="form-control" style="border-color: lightgrey; border-radius: 0px;" placeholder="keywords..." id="keywordMain">', '');
//             clear(['slogan', 'searchSectionTitle', 'typeMainContainer', 'filterContainer', 'searchMain', 'searchResult',
//                 'itemDetail', 'relatedDetailHeader', 'relatedDetailList', 'reviewFormTitle', 'reviewForm', 'reviewDeleteFormTitle', 'reviewDeleteForm', 'introduction', 'about']);
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry,</strong> You need to login for this action.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }

//     }catch(error)
//     {
//         if(error == 'TypeError: Failed to fetch')
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, BookHub is disconnected from the server. </strong>Please try to restart the server.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, there\'s been an error: </strong>' + error +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//     }
// });

// document.getElementById('addReview').addEventListener('click', async function(event){
//     event.preventDefault();
//     try
//     {
//         let status = await fetch('http://localhost:9595/user');
//         let statusContent = await status.text();
//         if(statusContent)
//         {
//             document.getElementById('reviewFormTitle').innerHTML = '<h2>Submit Your Review</h2>';
//             document.getElementById('reviewForm').innerHTML = '<form class="needs-validation" action="/submit/review" method="post"><div class="form-row"><div class="col-12 col-md-6 mb-3"><label for="reviewTitle">Review Title *</label><input type="text" class="form-control" id="reviewTitle" placeholder="Review Title" required></div><div class="col-12 col-md-6 mb-3"><label for="reviewBook">Book to be Reviewed *</label><select class="form-control" id="reviewBook" required></select></div></div><div class="form-row"><div class="col-12 mb-3"><label for="reviewContent">Review *</label><textarea class="form-control" id="reviewContent" required></textarea></div></div><button class="btn btn-success" type="submit">Submit Your Review</button></form><br>';
            
//             let response = await fetch('http://localhost:9595/search?keyword=&genre=&author=');
//             let body = await response.text();
//             let content = '';
//             let catalogue = JSON.parse(body);
//             for(let i = 0; i < catalogue.length; i++)
//             {
//                 let detail = 'http://localhost:9595/search?keyword=' + catalogue[i].title + '&genre=' + catalogue[i].genre + '&author=' + catalogue[i].lastName + catalogue[i].givenName;
//                 content += '<option value=\'' 
//                 + detail
//                 + '\'>' + catalogue[i].title + '</option>';
//             }
//             document.getElementById('reviewBook').innerHTML = content;

//             // Collapses all irrelavent parts
//             document.getElementById('searchMainControl').innerHTML = document.getElementById('searchMainControl').innerHTML.replace('<input type="text" class="form-control" style="border-color: lightgrey; border-radius: 0px;" placeholder="keywords..." id="keywordMain">', '');
//             clear(['slogan', 'searchSectionTitle', 'typeMainContainer', 'filterContainer', 'searchMain', 'searchResult',
//                 'itemDetail', 'relatedDetailHeader', 'relatedDetailList', 'bookFormTitle', 'bookForm', 'introduction', 'about']);

//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry,</strong> You need to login for this action.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }

//     }catch(error)
//     {
//         if(error == 'TypeError: Failed to fetch')
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, BookHub is disconnected from the server. </strong>Please try to restart the server.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, there\'s been an error: </strong>' + error +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//     }
// });

// document.getElementById('bookForm').addEventListener('submit', async function(event){
//     event.preventDefault();
//     try
//     {
//         let status = await fetch('http://localhost:9595/user');
//         let statusContent = await status.text();
//         if(statusContent)
//         {
//             let book = new Book(document.getElementById('bookTitle').value, document.getElementById('bookGenre').value, document.getElementById('bookAuthorGN').value, document.getElementById('bookAuthorLN').value, document.getElementById('bookIntro').value);
//             let response = await fetch('http://localhost:9595/submit/book', 
//                 {
//                     method:"POST",
//                     headers: {
//                         "Content-Type": 'application/x-www-form-urlencoded'
//                     },
//                     body: "submission=" + JSON.stringify(book)
//                 });
//             if(!response.ok)
//             {
//                 throw response;
//             }
//             else
//             {
//                 if(response.text() == 'Repeated entry.')
//                 {
//                     throw new Error('problem adding book: ' + response.code);
//                 }
//                 else
//                 {
//                     // Message and 'refreshing' of the form shows the user that their submission has been successful
//                     document.getElementById('bookForm').innerHTML = '<form class="needs-validation" action="/submit/book" method="post"><div class="form-row"><div class="col-12 col-md-6 mb-3"><label for="bookTitle">Title *</label><input type="text" class="form-control" id="bookTitle" placeholder="Title" required></div><div class="col-12 col-md-6 mb-3"><label for="bookGenre">Genre *</label><select class="form-control" id="bookGenre" required><option value="Adventure">Adventure</option><option value="Classics">Classics</option><option value="Fantasy">Fantasy</option><option value="Historical Fiction">Historical Fiction</option><option value="Horror">Horror</option><option value="Humor">Humor</option><option value="Magical Realism">Magical Realism</option><option value="Mystery">Mystery</option><option value="Mythology">Mythology</option><option value="Romance">Romance</option><option value="Science Fiction">Science Fiction</option><option value="Short Story">Short Story</option><option value="Autobiography">Autobiography</option><option value="Biography">Biography</option><option value="Journalism">Journalism</option><option value="Reference Book">Reference Book</option></select></div></div><div class="form-row"><div class="col-12 col-md-6 mb-3"><label for="bookAuthorLN">Author\'s Last Name *</label><input type="text" class="form-control" id="bookAuthorLN" placeholder="Author\'s last name" required></div><div class="col-12 col-md-6 mb-3"><label for="bookAuthorGN">Author\'s Given Name *</label><input type="text" class="form-control" id="bookAuthorGN" placeholder="Author\'s given name" required></div></div><div class="form-row"><div class="col-12 mb-3"><label for="bookIntro">Introduction</label><textarea class="form-control" id="bookIntro"></textarea></div></div><button class="btn btn-success" type="submit">Submit Your Book</button></form><br>';
//                     document.getElementById('alertSection').innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Thanks!</strong> Your submission is successful!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//                     $('html,body').scrollTop(0);
//                     // Loads in new author list, genre list for navbar and navbar's search box
//                     loadNav();
//                 }
//             }
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry,</strong> You need to login for this action. If the navigation bar stills shows that you are logged in, please refresh the page and login again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
        
//     } catch(error)
//     {
//         if(error == 'TypeError: Failed to fetch')
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, BookHub is disconnected from the server. </strong>Please try to restart the server.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, this book has already been entered. Please try another book.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//     }
// });

// document.getElementById('reviewForm').addEventListener('submit', async function(event){
//     event.preventDefault();
//     try
//     {
//         let status = await fetch('http://localhost:9595/user');
//         let statusContent = await status.text();
//         if(statusContent)
//         {
//             let r = await fetch(document.getElementById('reviewBook').value);
//             let body = await r.text();
//             let reviewBook = JSON.parse(body)[0];

//             let review = new Review(statusContent, reviewBook, document.getElementById('reviewTitle').value, document.getElementById('reviewContent').value);

//             let response = await fetch('http://localhost:9595/submit/review', 
//                 {
//                     method:"POST",
//                     headers: {
//                         "Content-Type": 'application/x-www-form-urlencoded'
//                     },
//                     body: "submission=" + JSON.stringify(review)
//                 });
//             if(!response.ok)
//             {
//                 throw new Error('problem adding book: ' + response.code);
//             }
//             else
//             {
//                 // Message and 'refreshing' of the form shows the user that their submission has been successful
//                 document.getElementById('reviewForm').innerHTML = '<form class="needs-validation" action="/submit/review" method="post"><div class="form-row"><div class="col-12 col-md-6 mb-3"><label for="reviewTitle">Review Title *</label><input type="text" class="form-control" id="reviewTitle" placeholder="Review Title" required></div><div class="col-12 col-md-6 mb-3"><label for="reviewBook">Book to be Reviewed *</label><select class="form-control" id="reviewBook" required></select></div></div><div class="form-row"><div class="col-12 mb-3"><label for="reviewContent">Review *</label><textarea class="form-control" id="reviewContent" required></textarea></div></div><button class="btn btn-success" type="submit">Submit Your Review</button></form><br>';
            
//                 let resp = await fetch('http://localhost:9595/search?keyword=&genre=&author=');
//                 let body = await resp.text();
//                 let content = '';
//                 let catalogue = JSON.parse(body);
//                 for(let i = 0; i < catalogue.length; i++)
//                 {
//                     let detail = 'http://localhost:9595/search?keyword=' + catalogue[i].title + '&genre=' + catalogue[i].genre + '&author=' + catalogue[i].lastName + catalogue[i].givenName;
//                     content += '<option value=\'' 
//                     + detail
//                     + '\'>' + catalogue[i].title + '</option>';
//                 }
//                 document.getElementById('reviewBook').innerHTML = content;
//                 document.getElementById('alertSection').innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Thanks!</strong> Your submission is successful!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//                 $('html,body').scrollTop(0);
//             }
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry,</strong> You need to login for this action. If the navigation bar stills shows that you are logged in, please refresh the page and login again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//     } catch(error)
//     {
//         if(error == 'TypeError: Failed to fetch')
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, BookHub is disconnected from the server. </strong>Please try to restart the server.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, you have already submitted a review with the same title to the same book. Please try again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//     }
// });

// document.getElementById('reviewDeleteForm').addEventListener('submit', async function(event){
//     event.preventDefault();
//     try
//     {
//         let status = await fetch('http://localhost:9595/user');
//         let statusContent = await status.text();
//         if(statusContent)
//         {
//             let r = await fetch(event.target.id);
//             let body = await r.text();
//             let result = JSON.parse(body);
//             let response = await fetch('http://localhost:9595/delete/review', 
//                 {
//                     method:"POST",
//                     headers: {
//                         "Content-Type": 'application/x-www-form-urlencoded'
//                     },
//                     body: "submission=" + JSON.stringify(result[0])
//                 });
//             if(!response.ok)
//             {
//                 throw new Error('problem adding book: ' + result[0]);
//             }
//             else
//             {
//                 // Message and 'refreshing' of the form shows the user that their submission has been successful
//                 document.getElementById('reviewDeleteFormTitle').innerHTML = '<h2>Deletion is successful.</h2>';
//                 clear(['reviewDeleteForm']);
//                 document.getElementById('alertSection').innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Thanks!</strong> Your review is deleted!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//                 $('html,body').scrollTop(0);
//             }
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry,</strong> You need to login for this action. If the navigation bar stills shows that you are logged in, please refresh the page and login again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);e
//         }
//     } catch(error)
//     {
//         if(error == 'TypeError: Failed to fetch')
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, BookHub is disconnected from the server. </strong>Please try to restart the server.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//         else
//         {
//             document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, there\'s been an error: </strong>' + error +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
//             $('html,body').scrollTop(0);
//         }
//     }

// });