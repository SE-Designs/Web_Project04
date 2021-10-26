 
  // button.addEventListener('click', () => {

function calculate() {
	
	// var input_value = document.getElementsByClassName("form controls").value;
  
  
    let input_value = parseInt(document.getElementsByClassName("form_controls"))
	// var input_value = parseFloat(inp_val).value;
	
    const res1 = document.getElementById("education");
    const res2 = document.getElementById("networth");
    const res3 = document.getElementById("caste");
    const res4 = document.getElementById("skills");
    const res5 = document.getElementById("age");
    const res6 = document.getElementById("reputation");
    
    const r1 = res1.value;
    const r2 = res2.value;
    const r3 = res3.value;
    const r4 = res4.value;
    const r5 = res5.value;
    const r6 = res6.value;
	
	// EDUCATION:
    
        if (r1 == "undergraduate"){
            input_value *= 1.50;
        }
        else if (r1 == "college"){
            input_value *= 1.20;
        }
        else if (r1 == "high_school"){
            input_value *= 1.05;
        }
        else if (r1 == "middle_school"){
            input_value *= 0.90;
        }
		else {
			input_value = input_value;
		}
		
	// NETWORTH:

        if (r2 == "upper_class"){
            input_value *= 2.00;
        }
        else if (r2 == "middle_class"){
            input_value *= 1.50;
        }
        else if (r2 == "lower_class"){
            input_value *= 1.20;
        }
		else {
			input_value = input_value;
		}
		
	// CASTE:

        if (r3 == "brahmin"){
            input_value += 100;
        }
        else if (r3 == "kshatriya"){
            input_value += 50;
        }
        else if (r3 == "vaishya"){
            input_value += 20;
        }
        else if (r3 == "shudra"){
            input_value += 15;
        }
        else if (r3 == "varna"){
            input_value -= 50;
        }
		else {
			input_value = input_value;
		}
		
	// SKILLS:

        if(r4 == "playing_music"){
            input_value += 10;
        }
        else if (r4 == "cooking"){
            input_value += 20;
        }
        else if (r4 == "easygoing"){
            input_value += 15;
        }
        else if (r4 == "signs"){
            input_value += 10;
        }
		
	// AGE:

        if (r5 == "eighteen"){
            input_value *= 1.50;
        }
        else if (r5 == "twenty_four"){
            input_value *= 1.20;
        }
        else if (r5 == "twenty_eight"){
            input_value *= 0.95;
        }

	// gossips:

        if(r6 == "gossips 1"){
            input_value*=0.85;
        }
        else if(r6 == "gossips 2"){
            input_value*=0.9;
        }
        else if(r6 == "gossips 3"){
            input_value-=20;
        }
		
		// var results = input_value;
		document.getElementById("results").innerHTML = input_value;
    }