var outfit = [ 
            "<div id='outfit1'><div id='cardigan' class='innerHover'><div id='cardiganpop' class='popupdiv'>Cardigans are gouda!</div></div><div id='blouse' class='innerHover'><div id='blousepop' class='popupdiv'>Blouses are like really gouda!</div></div><div id='pants' class='innerHover'><div id='pantspop' class='popupdiv'>Don&#39;t forget to wear pants!</div></div><div id='shoes' class='innerHover'><div id='shoespop' class='popupdiv'>No time for insensible shoes!</div></div></div>", 
            "<div id='outfit1'><div id='cardigan' class='innerHover'><div id='cardiganpop' class='popupdiv'>Cardigans are ok!</div></div><div id='blouse' class='innerHover'><div id='blousepop' class='popupdiv'>Blouses are not gouda!</div></div><div id='pants' class='innerHover'><div id='pantspop' class='popupdiv'>I forget to wear pants!</div></div><div id='shoes' class='innerHover'><div id='shoespop' class='popupdiv'>Shoes suck!</div></div></div>", 
            "<div id='outfit1'><div id='cardigan' class='innerHover'><div id='cardiganpop' class='popupdiv'>Cardeegang!</div></div><div id='blouse' class='innerHover'><div id='blousepop' class='popupdiv'>Blow ur nose!</div></div><div id='pants' class='innerHover'><div id='pantspop' class='popupdiv'>Pants on fire!</div></div><div id='shoes' class='innerHover'><div id='shoespop' class='popupdiv'>AHHH!</div></div></div>" ];
var outfitContainer = document.getElementById("outfitContainer");
var changeOutfit = document.getElementById("changeoutfit");
function changeFunction(i){
    outfitContainer.innerHTML = outfit[i];
}