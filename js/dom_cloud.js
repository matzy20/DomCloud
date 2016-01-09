//count attributes
//count elements
//baseCase is elements with no children; if no children, kicks it back up and searches til it finds them
//can use call() and apply()

//need a starting point, below = html
var treeRoot = document.documentElement;
var domCloud = {

  elementTracker: {},
  attributeTracker: {
    // attribute: treeRoot.attributes,
  },
  //method on object domCloud
  findingElements: function (element) {
    var elementType = element.tagName;

    if (domCloud.elementTracker.hasOwnProperty(elementType)){
      domCloud.elementTracker[elementType]++;
      } else{
      //setting it to 1 vs 'adding' to it
      domCloud.elementTracker[elementType] = 1;
      }
    //since we're pulling via tagName no need a base? Similar to attribute?
    /*console.log("length", element.children.length);
    used the above to check what's printing out*/
    for (var i = 0; i < element.children.length; i++){
      domCloud.findingElements(element.children[i]);
    }
  },

  findingAttributes: function (element) {
    var attributeType = element.attributes;

    if (domCloud.attributeTracker.hasOwnProperty(attributeType)){
      domCloud.attributeTracker[attributeType]++;
    } else {
      domCloud.attributeTracker[attributeType] = 1;
    }
    for (var i = 0; i < element.children.length; i++){
      domCloud.findingAttributes(element.children[i]);
    }
  }
};
//need window onload since <script> was located at top of html
//dom_cloud.js wasn't loading fully, would hit script then break out due to location of script on html NOT b/c NO CHILD
window.onload = function (){
  domCloud.findingElements(treeRoot);
  domCloud.findingAttributes(treeRoot);
  console.log(domCloud.elementTracker);
  console.log(domCloud.attributeTracker);
};