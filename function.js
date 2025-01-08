window.onload =function(){
    let count = 0;


    document.getElementById("increment-btn").addEventListener("click", function() {
      count++;
      document.getElementById("count").textContent = count;
    });
    
    document.getElementById("save-btn").addEventListener("click",function(){
        let savedCounts=document.getElementById("saved-counts")
        savedCounts.textContent +=`${count} -`
        count =0;
        document.getElementById("count").textContent = count;
    });

    
}

