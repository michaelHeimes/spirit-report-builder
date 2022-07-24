document.addEventListener("DOMContentLoaded", function() {
		
	const { PDFDocument, StandardFonts, rgb } = PDFLib;  
	let choices = document.querySelectorAll('input[type="checkbox"]');
	
	function showDownLoadCard() {
		
	}
	
	async function merge() {
		
		const pdfDoc = await PDFDocument.create();
		
		const sourceUrl = '/assets/pdf/SPR902_CSR_2022_V14.pdf';
		
		const sourcePdfBytes = await fetch(sourceUrl).then(res => res.arrayBuffer());
		
		const sourcePdfDoc = await PDFDocument.load(sourcePdfBytes);  
	  
		const [cover] = await pdfDoc.copyPages(sourcePdfDoc, [0]);
		pdfDoc.addPage(cover);		
		
		
	   
	
	
	
		if (document.querySelectorAll('input[type="checkbox"]:checked').length ) {
			
			if( document.getElementById('cat1sec1').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [2]);
				pdfDoc.addPage(page1);	        
			}
			if( document.getElementById('cat1sec2').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [3]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [4]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);	        
			}        
			if( document.getElementById('cat1sec3').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [5]);
				pdfDoc.addPage(page1);
			}

			
			if( document.getElementById('cat2sec1').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [6]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [7]);
				let [page3] = await pdfDoc.copyPages(sourcePdfDoc, [8]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
				pdfDoc.addPage(page3);
			}
			if( document.getElementById('cat2sec2').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [9]);
				pdfDoc.addPage(page1);	        
			}
			if( document.getElementById('cat2sec3').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [10]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [11]);
				pdfDoc.addPage(page1);  
				pdfDoc.addPage(page2);      
			}    
			
			
			if( document.getElementById('cat3sec1').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [12]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [13]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			}    
			if( document.getElementById('cat3sec2').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [14]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [15]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			}
			if( document.getElementById('cat3sec3').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [16]);
				pdfDoc.addPage(page1);	        
			}
			if( document.getElementById('cat3sec4').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [17]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [18]);
				let [page3] = await pdfDoc.copyPages(sourcePdfDoc, [19]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
				pdfDoc.addPage(page3);	        
			}


			if( document.getElementById('cat4sec1').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [20]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [21]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			}    
			if( document.getElementById('cat4sec2').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [22]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [23]);
				let [page3] = await pdfDoc.copyPages(sourcePdfDoc, [24]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
				pdfDoc.addPage(page3);
			}
			if( document.getElementById('cat4sec3').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [25]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [26]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			}  
			if( document.getElementById('cat4sec4').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [27]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [28]);
				let [page3] = await pdfDoc.copyPages(sourcePdfDoc, [29]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
				pdfDoc.addPage(page3);
			} 
			

			if( document.getElementById('cat5sec1').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [30]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [31]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			}    
			if( document.getElementById('cat5sec2').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [32]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [33]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			}
			if( document.getElementById('cat5sec3').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [34]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [35]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			}  
			if( document.getElementById('cat5sec4').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [36]);
				pdfDoc.addPage(page1);
			} 
			if( document.getElementById('cat5sec5').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [37]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [38]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			} 


			if( document.getElementById('cat6sec1').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [39]);
				pdfDoc.addPage(page1);
			}    
			if( document.getElementById('cat6sec2').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [40]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [41]);
				let [page3] = await pdfDoc.copyPages(sourcePdfDoc, [42]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
				pdfDoc.addPage(page3);
			}
			if( document.getElementById('cat6sec3').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [43]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [44]);
				let [page3] = await pdfDoc.copyPages(sourcePdfDoc, [45]);
				let [page4] = await pdfDoc.copyPages(sourcePdfDoc, [46]);
				let [page5] = await pdfDoc.copyPages(sourcePdfDoc, [47]);
				let [page6] = await pdfDoc.copyPages(sourcePdfDoc, [48]);
				let [page7] = await pdfDoc.copyPages(sourcePdfDoc, [49]);
				let [page8] = await pdfDoc.copyPages(sourcePdfDoc, [50]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
				pdfDoc.addPage(page3);
				pdfDoc.addPage(page4);
				pdfDoc.addPage(page5);
				pdfDoc.addPage(page6);
				pdfDoc.addPage(page7);
				pdfDoc.addPage(page8);
			}  
			if( document.getElementById('cat6sec4').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [51]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [52]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			} 
			if( document.getElementById('cat6sec5').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [53]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [54]);
				let [page3] = await pdfDoc.copyPages(sourcePdfDoc, [55]);
				let [page4] = await pdfDoc.copyPages(sourcePdfDoc, [56]);
				let [page5] = await pdfDoc.copyPages(sourcePdfDoc, [57]);
				let [page6] = await pdfDoc.copyPages(sourcePdfDoc, [58]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
				pdfDoc.addPage(page3);
				pdfDoc.addPage(page4);
				pdfDoc.addPage(page5);
				pdfDoc.addPage(page6);
			}
			if( document.getElementById('cat6sec6').checked ) {
				let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [59]);
				let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [60]);
				pdfDoc.addPage(page1);
				pdfDoc.addPage(page2);
			} 	
			
			let fadeInLoader = function() {
				let loader = document.getElementById('loader');
				loader.classList.add('show');		        
			}
			fadeInLoader();
						
			const pdfBytes = await pdfDoc.save();
			
			let downloadingText = function(e) {
				let dlText = document.getElementById('loading-text');
				dlText.innerHTML = "downloading your report...";		        
			}
			downloadingText();
			
			let fadeOutLoader = async function(e) {
				await pdfDoc.save();
				let loader = document.getElementById('loader');
				loader.classList.remove('show');		        
			}
			setTimeout(function(e) {
				fadeOutLoader();
			}, 1000);
			
			download(pdfBytes, "merged-pdf.pdf", "application/pdf");
	
		} else {
			alert("Please check chapters or sections before creating your report.");
		}
	
	};
	
	
	// Select Entire Report
	let wholeReportBtn = document.getElementById('addAll');
	wholeReportBtn.onclick = function() {
		for (let choice of choices) {
			choice.checked = this.checked;
		}
	}
	
	// Clear Form
	let clearBtn = document.getElementById('clear-options');
		for (let choice of choices) {
			choice.checked != this.checked;
		}

	// Select All Buttons for each choice block
	let allBtns = document.querySelectorAll('.choice-block .all-sections input');
	for (let i = 0; i < allBtns.length; i++) {
		allBtns[i].onclick = function() {
			let choiceBlock = this.closest('.choice-block');
			let childCheckboxes = choiceBlock.querySelectorAll('input[type="checkbox"]');
			for (let childCheckbox of childCheckboxes) {
				childCheckbox.checked = this.checked;
			}
		}
	}   	
	
// 	Create and Download
	document.getElementById('create-download').onclick = function(e) {
		e.preventDefault();
		merge();
	}
	
});