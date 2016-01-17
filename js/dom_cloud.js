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
  },

  findingAttributes: function (attribute) {
    //it's needing to pull attributes off of an object, which it isn't
    var attributeType = attribute.querySelectorAll('script, link, div, section, header, abbr, a, p, aside, h3, li');
    // console.log(attributeType);

    for (var i = 0; i < attributeType.length; i++){
      var currentAttributeList = attributeType[i].attributes;
      for (var j = 0; j < currentAttributeList.length; j ++){
        //element or nodes' attributes property provides all attributes for that element
        var attributeToCount = currentAttributeList[j].name;
        console.log(attributeToCount);
      if (domCloud.attributeTracker[attributeToCount]){
        domCloud.attributeTracker[attributeToCount]++;
      } else {
        domCloud.attributeTracker[attributeToCount] = 1;
      }
      }
      // console.log(domCloud.attributeTracker);
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