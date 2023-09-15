export const findPath = (ob, key) => {
    const path = [];
    const keyExists = (obj) => {
      if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
        return false;
      }
      else if (obj.hasOwnProperty(key)) {
        return true;
      }
      else if (Array.isArray(obj)) {
        let parentKey = path.length ? path.pop() : "";
  
        for (let i = 0; i < obj.length; i++) {
          path.push(`${parentKey}[${i}]`);
          const result = keyExists(obj[i], key);
          if (result) {
            return result;
          }
          path.pop();
        }
      }
      else {
        for (const k in obj) {
          path.push(k);
          const result = keyExists(obj[k], key);
          if (result) {
            return result;
          }
          path.pop();
        }
      }
      return false;
    };
  
    keyExists(ob);
  
    return path.join(".");
  }

// Destructuring array:
// --------------------

const categoryCheck = (d3) => {
  let obj3 = {};

  if(d3.category_name) {
    obj3["title"] = d3.category_name;
  }

  return obj3;
}

const releasesCheck = (d2) => {
  let obj2 = {};

  if(d2.attributes.title) {
    obj2["title"] = d2.attributes.title;
  }

  if(d2.attributes.category.length > 0) {
    obj2["children"] = [];

    (d2.attributes.category).forEach(data => {
      let value = categoryCheck(data);

      obj2["children"].push(value);
    })
  }
  return obj2;
}

const titleCheck = (d1) => {
  let obj = {};

  if(d1.attributes?.title) {
    obj["title"] = d1.attributes.title;
  }

  if(Object.keys(d1.attributes.releases).length > 0) {
    obj["children"] = [];

    (d1.attributes.releases.data).forEach(data => {
      let value = releasesCheck(data);
      obj["children"].push(value);
    })
  }
  return obj;
}

export const generateArray = (arrData) => {
  let array = [];

  arrData.forEach(data => {
    let value = titleCheck(data);
    array.push(value);
  })

  return array;
}