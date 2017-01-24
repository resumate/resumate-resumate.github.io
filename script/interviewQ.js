
        var set1 = [
            "Why do you want this job?",
            "Where do you see yourself in five years?",
            "What makes you different from your competition?",
            "What do you consider to be your greatest weakness?" ];
        var set2 = [
            "What do you know about our company?",
            "What do you consider to be your greatest strength?",
            "Why are you leaving your current job?",
            "Tell me about yourself." ];
        var set3 = [
            "How would you describe your work style?",
            "What is your proudest achievement?",
            "Give me an example of a time where you had to solve a problem.",
            "What interests you about this job?" ];
        var submit_button = document.getElementById("submit_int");
        var intStyleSheet = "<style>* { font-family: Trebuchet MS, Tahoma, sans-serif; } body { width: 8.5in; margin: 0 auto; } .answer { margin-left: .5in; } #intH1 { text-align: center; } #intPrintBtn { position: fixed; top: 0; right: 0; text-transform: uppercase; background-color: #1D6DA6; color: white; font-weight: bold; font-size: 13pt; padding: 15px; border: none; font-family: Trebuchet MS; }</style>";
        
        function myFunction(set){
            document.getElementById("interviewq").innerHTML = "";
            for (i = 0; i < set.length; i++) {
                var container = document.createElement("div");
                //create a h6 tag for question
                var pnode = document.createElement("p");
                    pnode.setAttribute("class","interview_questions");
                var qtext = document.createTextNode(set[i]);
                    pnode.appendChild(qtext);
                container.appendChild(pnode);
                var input_node = document.createElement("textarea");
                    input_node.className = "responses";
                    input_node.setAttribute("rows", "8");
                container.appendChild(input_node);
                document.getElementById("interviewq").appendChild(container);
            }
            
        }
        //use this automatically
        myFunction(set1);
        
        
        function nWin() {
          var w = window.open();
          var html = $("#toNewWindow").html();
            
            $(w.document.body).html(intStyleSheet + html);
            $(w.document.head).html("<title>Your Responses</title><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'>");
        }

        $(function() {
            $("input#submit_int").click(nWin);
        });
        
        
        submit_button.addEventListener('click', function(){
            for (i = 0; i < 4; i++) {
                var largestcontainer = document.getElementById("largestcontainer");
                var question = document.getElementsByClassName("interview_questions");
                var answer = document.getElementsByClassName("responses");
                var question_output = document.getElementsByClassName("question");
                var answer_output = document.getElementsByClassName("answer");          
                //create a p tag for question
                question_output[i].innerHTML = question[i].innerHTML;
                answer_output[i].innerHTML = answer[i].value;
            }
        });