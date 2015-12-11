//count attributes
//count elements
//baseCase is elements with no children; if no children, kicks it back up and searches til it finds them
//can use call() and apply()

//need a starting point, below = html
var treeRoot = document.documentElement;
var domCloud = {
  elementTracker: {},
  //method on object domCloud
  findingElements: function (element) {

    var elementType = element.tagName;

    if (domCloud.elementTracker.hasOwnProperty(elementType)){
      domCloud.elementTracker[elementType]++;
      console.log('checking if same elementType');
    } else{
      //setting it to 1 vs 'adding' to it
      domCloud.elementTracker[elementType] = 1;
    }


    console.log(element);
    console.log("length", element.children.length);
    for (var i = 0; i < element.children.length; i++){
      domCloud.findingElements(element.children[i]);
    }
  }

  // fndingAttributes: function (attribute){

  //   var attributeType = element.attribute;
  // }


};
//need window onload since <script> was located at top of html
//dom_cloud.js wasn't loading fully, would hit script then break out due to location of script on html NOT b/c NO CHILD
window.onload = function (){
  domCloud.findingElements(treeRoot);
  console.log(domCloud.elementTracker);
};