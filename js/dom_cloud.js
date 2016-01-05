//count attributes
//count elements
//baseCase is elements with no children; if no children, kicks it back up and searches til it finds them
//can use call() and apply()

//need a starting point, below = html
var treeRoot = document.documentElement;
var domCloud = {

  elementTracker: {},
  attributeTracker: {},
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
  }

  findingAttributes: function (attribute) {

    var checkAttribute = attribute.getAttribute();
    console.log(checkAttribute);

    if (domCloud.attributeTracker.hasOwnProperty(checkAttribute)){
      domCloud.attributeTracker[checkAttribute]++;
    } else {
      domCloud.attributeTracker[checkAttribute] = 1;
    }
    for (var i = 0; i < checkAttribute.children.length; i++){
      domCloud.findingAttributes(attribute.children[i]);
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