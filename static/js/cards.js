function rudrSwitchTab(rudr_tab_id, rudr_tab_content, id, toggleTabGeneral, forLoopCounter, day) {
  console.log("this is the rudr_tab_content", rudr_tab_content);
  console.log("this is the rudr_tab_id", rudr_tab_id);
  console.log("this is the id", id);
  console.log("//////////////////////////////////////");

  // first of all we get all tab content blocks (I think the best way to get them by class names)
  var words = "tabcontent" + id;
  console.log("this is what is in the words variable", words);
  var x = document.getElementsByClassName(words);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // hide all tab content
  }
  document.getElementById(rudr_tab_content).style.display = "block"; // display the content of the tab we need
  // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
  const tabs = document.getElementsByClassName(toggleTabGeneral);
  console.log("this is the toggleTab General ", x, " ", x.length);
    
    for (let prop in tabs) {
        if (tabs.hasOwnProperty(prop)) {
            tabs[prop].className = "tabmenu" + forLoopCounter + " inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50";
            console.log("object prop", prop);
            if (day == "Monday" && prop == 0) {
              console.log("its trying to toggle tuesday");
              tabs[prop].className =
                "inline-block p-4 tabmenu" +
                forLoopCounter +
                " active text-blue-600 bg-gray-300 rounded-t-lg active cursor-pointer dark:bg-gray-800 dark:text-blue-500";
            }
            if (day == "Tuesday" && prop == 1) {
                console.log("its trying to toggle tuesday")
                tabs[prop].className = "inline-block p-4 tabmenu" + forLoopCounter + " active text-blue-600 bg-gray-300 rounded-t-lg active cursor-pointer dark:bg-gray-800 dark:text-blue-500";
                
            }
            if (day == "Wednesday" && prop == 2) {
              console.log("its trying to toggle tuesday");
              tabs[prop].className =
                "inline-block p-4 tabmenu" +
                forLoopCounter +
                " active text-blue-600 bg-gray-300 rounded-t-lg active cursor-pointer dark:bg-gray-800 dark:text-blue-500";
            }
            if (day == "Thursday" && prop == 3) {
              console.log("its trying to toggle tuesday");
              tabs[prop].className =
                "inline-block p-4 tabmenu" +
                forLoopCounter +
                " active text-blue-600 bg-gray-300 rounded-t-lg active cursor-pointer dark:bg-gray-800 dark:text-blue-500";
            }
             if (day == "Friday" && prop == 4) {
               console.log("its trying to toggle tuesday");
               tabs[prop].className =
                 "inline-block p-4 tabmenu" +
                 forLoopCounter +
                 " active text-blue-600 bg-gray-300 rounded-t-lg active cursor-pointer dark:bg-gray-800 dark:text-blue-500";
             }
            if (day == "Saturday" && prop == 5) {
              console.log("its trying to toggle tuesday");
              tabs[prop].className =
                "inline-block p-4 tabmenu" +
                forLoopCounter +
                " active text-blue-600 bg-gray-300 rounded-t-lg active cursor-pointer dark:bg-gray-800 dark:text-blue-500";
            }
            if (day == "Sunday" && prop == 6) {
              console.log("its trying to toggle tuesday");
              tabs[prop].className =
                "inline-block p-4 tabmenu" +
                forLoopCounter +
                " active text-blue-600 bg-gray-300 rounded-t-lg active cursor-pointer dark:bg-gray-800 dark:text-blue-500";
            }
        }
    }
}

