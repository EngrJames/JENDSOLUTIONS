function validateFile(){var e=document.getElementById("myfile");if("files"in e){if(0==e.files.length)return!1;for(var i=0;i<e.files.length;i++){var n=e.files[i];if("name"in n){var r=n.type;if(r=r.toLowerCase(),"image/png"!=r&&"image/jpg"!=r&&"image/jpec"!=r&&"image/jif"!=r)return!1}if("size"in n&&n.size>35e3)return!1}}return!0}