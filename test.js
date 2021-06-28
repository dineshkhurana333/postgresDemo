const req = {
  body: {
    name: 'Dinesh',
    //email: 'khurana',
    technologies: ['Java', 'nodejs']
  }
}

function validate() {
  check(req.body, {
    name: 'required|string',
    email: 'required|string',
    technologies: 'required|array'
  });
};

// if(!validate()){
//   throw new Error("inputs required")
// }


function check(body, arguents) {

  const requestBodyProperties = Object.keys(body);
  console.log(requestBodyProperties);
  const ruleProperties = Object.keys(arguents);
  console.log(ruleProperties);

  

}

function required(input) { }

function string() { }

function array() { }

const rules = [
  {
    required: required,
    string: string,
    array: array

  }
]

validate()