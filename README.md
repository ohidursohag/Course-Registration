# Course-Registration

This a project on Online Course Registration 



[Live Page](https://course-registration-alpha.vercel.app)


## Key Features
   - User can select courses by clicking on select button of each course card , a course can be selected max one time
   - There is a limit on selecting courses according to course credit hours. User can select max 20 credit hours. Total selected courses credit hours and remaining credit will show on cart 
   - User can see total price of the selected courses.


## How I manage states
I used all the state variables in App.jsx file closest common parent of all component, and then pass it down to them via props. 
```
  const [coursesData, setCoursesData] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [remainingCreditHours, setRemainingCreditHours] = useState(20);
```

- Firstly I used a `useState()` hook to store the courses data feached from JSON file 

- then  I used 2nd `useState()` hook to store selected courses data 
- then  I used 3 more `useState()` hook to calculte and store data of,
    - Total price 
    - Total credit hours
    - Remaining credit hours

