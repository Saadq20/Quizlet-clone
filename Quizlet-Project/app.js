//Select DOM
const studyAdd = document.querySelector(".term-add");
const studySet = document.querySelector(".create-stady-set-term");

//Event Listeners
studyAdd.addEventListener("click", addStudy);

//Functions
function addStudy(e) {
  //Prevent natural behaviour
  e.preventDefault();
  const studyDiv = document.createElement("div");
  studyDiv.classList.add("study-item");

  studyDiv.innerHTML = `
  <div class="box-stady-set2">

<div class="info-box">
 <p>1</p>
 <span class="list-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">

  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
</span>

 <span class="delete-icon">
   
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
  
  <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"/>
</svg>

</span>

</div>

<br > 
<div class="term-definition">

  <div class="form-term">
    <div>
    <label class="left-input-term">
    <input type="text" name="term" placeholder="Enter term" class="input-term">
    <p>TERM</p>
    </label> </div>
  <div class="right-input-term">
    <label> 
    <input type="text" name="definition" placeholder="Enter definition" class="input-definition">
    <p>DEFINATION</p> 
  </label></div>

  </div>  
  
  <div class="image-box"> <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
    </svg></span>
  </div>


</div>
  </div>
  
`;

  studySet.appendChild(studyDiv);
}
