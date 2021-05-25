1.in (src/store/session) ----------
        for the restoreUser function
{DO I NEED TO CALL THIS IN A USEEFFECT FOR WHEN THE PAGE IS RENDERED??}

2. in (src/store/session)--------------  
        for login
{will this validate user, so I can just dispatch this when login for is submit?}


3. in (see 2)--------------
        for signup and LOGOUT
{SAME QUESTION AS NUMBER 2}


4. in (generic)--------------
        for images
{how am I able to connect up images to be served}

5. in (backend/routes/api/reviews.js)--------------
        for req.params
{will req.params be accessible in express if they are named 
within React or is this only available assignment purely exist in
React?}


6. in ()--------------
7. in ()--------------
8. in ()--------------
9.  in ()--------------
10. in ()--------------
11. in ()--------------
12. in ()--------------
13. in ()--------------




1. UTILIZE MIDDLEWARE requireauth... on the routes that require auth
--such as
----POSTING, EDITING, CREATING a new review


2. use csrfFetch for all fetches from within my redux thunks



3. !!THIS MUST BE ACCOUNTED FOR ALL REFRESH INSTANCES
logic for the conditional rendering is in the ProductDetails page
this is for when the products is not in the store such as a on a refresh


4. NotFound page, could send a redirect page to do for there
could use history.push('/not-found')

