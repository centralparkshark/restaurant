import Logo from './logo.png';

function generateMain() {
    //create tabs at top
      //home
      //menu
      //contact
  
  
  
  
    const element = document.querySelector('div#content');
  
    // Add the image to our existing div.
    const logo = document.createElement('img');
    logo.src = Logo;
    logo.alt = "cookie cookie ice cream logo";


    const title = document.createElement('h2');
    title.innerHTML = "Cookie Cookie Ice Cream";

    const address = document.createElement('div');
    address.class = "text";
    address.innerHTML = "1815 Mckees Rocks Road, McKees Rocks, Pennsylvania 15136, United States";

    element.appendChild(logo);
    element.appendChild(title);
    element.appendChild(address);

  
    // return element;
    return element;
  }

export default generateMain;




