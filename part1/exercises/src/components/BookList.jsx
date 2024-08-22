export default function BookList() {
   let pageTitle = "Alex Cross Series";
  const styles = {
    border: "2px solid black",
  };
  let book1 =
    "https://www.google.com/aclk?sa=l&ai=DChcSEwi_6LLG4omIAxUkK9QBHZtnOXQYABABGgJvYQ&co=1&ase=2&gclid=Cj0KCQjww5u2BhDeARIsALBuLnMnjdS4_vlLywsBufhdvPq9VMYAYzs1CQnVBxh2fbioiddK2xPPo44aAoJkEALw_wcB&sig=AOD64_2uQ2ObQoxfLfbkJ4ZxEM4RXm_-BA&ctype=5&q=&nis=4&ved=2ahUKEwiIla7G4omIAxVzM9AFHdXrOA0Q9aACKAB6BAgEEA4&adurl=";
  let book2 =
    "https://en.wikipedia.org/wiki/Kiss_the_Girls_(novel)";
  let book3 =
    "https://en.wikipedia.org/wiki/Cat_and_Mouse_(James_Patterson_novel)";
    

   return (
      <div>
         <h3 style={styles}>{pageTitle}</h3>
      <img src={book1} alt="Along Came the Spider" />
      <img src={book2} alt="Kiss The Girls" />
      <img src={book3} alt="Cat and Mouse" />
      </div>      
   );
}