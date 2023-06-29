require.config({
    baseUrl: 'scripts',
    paths: {
      'knockout': 'knockout',
      'product-form':'components/product-form'
      
    },
    
  });
  
  require(['knockout'], function(ko) {
    // ViewModel for the main application
    function AppViewModel() {
      var self = this;
  
      self.isSubmit = ko.observable(false)
  
  
  
      self.submitForm = function()
      {
        self.isSubmit = true
  
      }
  
  
      self.resetForm = function()
      {
        self.products([])
        self.productForms([])
        self.isSubmit(true)
      }
  
      self.products = ko.observableArray([]);
      self.productForms = ko.observableArray([]);
  
      self.addProductForm = function() {
        self.productForms.push({});
        
      };
  
      self.onProductAdded = function(product) {
        
        self.products.push(product);
      };
  
      self.removeProduct = function(product) {
        self.products.remove(product);
      };
  
      self.submitProducts = function() {
        console.log(self.products());
      };
    }
  
    // Apply bindings and initialize the main application
   
  
    // Register the product-form component
    ko.components.register('product-form', 
    {template:`
    <div class="product-form">
    
    
    <h3>Add Product</h3>
    <form>
      <label>Product ID:</label>
      <input type="text" data-bind="value: productId">
      <label>Name:</label>
      <input type="text" data-bind="value: name">
      <label>Type:</label>
      <select data-bind="value: type," required>
          <option value="">-- Select Type --</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
        </select>
      <label>Quantity:</label>
      <input type="text" data-bind="value: quantity ">
      <label>Availability:</label>
      <input type="radio" name="availability" value="yes" data-bind="checked: availability"> Yes
      <input type="radio" name="availability" value="no" data-bind="checked: availability"> No
      <label>Discount Types:</label>
      <input type="checkbox" value="HDFC" data-bind="checked: discountTypes"> HDFC
      <input type="checkbox" value="SBI" data-bind="checked: discountTypes"> SBI
      <input type="checkbox" value="Mastercard" data-bind="checked: discountTypes"> Mastercard<br>
     <button data-bind="click: addProduct">add</button>
    </form>
  </div>
  
    
    `,
  viewModel: function(params)
  {
      var self = this;
  
      self.productId = ko.observable('');
      self.name = ko.observable('');
      self.type = ko.observable('');
      self.quantity = ko.observable('');
      self.availability = ko.observable('');
      self.discountTypes = ko.observableArray([]);
      self.productIdValue = ko.observable('');
      self.nameValue  = ko.observable('');
      self.typeValue  = ko.observable('');
      self.quantityValue  = ko.observable('');
      self.availabilityValue  = ko.observable('');
      self.discountTypesValue  = ko.observableArray([]);
  
      self.formValues = ko.observable({});
  
      self.formy = ko.observableArray([]);
      
      // Function to add the product
      self.addProduct = function() {
        var product = {
          productId: self.productId(),
          name: self.name(),
          type: self.type(),
          quantity: self.quantity(),
          availability: self.availability(),
          discountTypes: self.discountTypes(),
        };
        console.log('hello')
        console.log(product)
  
  
  
        console.log(params.onProductAdded)
        
        // Call the onProductAdd function from the parent ViewModel
        if (typeof params.onProductAdded === 'function') {
        //   params.onProductAdded(product);
          params.onProductAdded(product)
        }
  // 
        // self.resetForm();
      };
  
      
      
    //   self.productId.subscribe(function(value){
    //     console.log(value)
    //     var currentValues = ko.utils.extend({}, self.formValues()); // Create a copy of the object
    //   currentValues.productId = value;
    //   self.formValues(currentValues);
      
    //   self.productIdValue(value)
  
    //   self.formy.push({'productId': self.productId()})
    //   })
  
      
  
      
  
  
    //   self.name.subscribe(function(value)
    //   {
    //     var currentValues = ko.utils.extend({}, self.formValues()); // Create a copy of the object
    //     currentValues.name = value;
    //     self.formValues(currentValues);
    //   }
    //   )
  
    //   self.type.subscribe(function(value){
    //     var currentValues = ko.utils.extend({}, self.formValues()); // Create a copy of the object
    //   currentValues.type = value;
    //   self.formValues(currentValues);
    //   console.log(value)
    //   })
  
  
    //   self.quantity.subscribe(function(value)
    //   {
    //     var currentValues = ko.utils.extend({}, self.formValues()); // Create a copy of the object
    //   currentValues.quantity = value;
    //   self.formValues(currentValues);
    //     self.quantityValue(value)
    //     console.log(value)
    //   })
  
    //   self.availability.subscribe(function(value)
    //   {var currentValues = ko.utils.extend({}, self.formValues()); // Create a copy of the object
    //   currentValues.availability = value;
    //   self.formValues(currentValues);
  
    //     console.log(value)
    //   })
  
    //   self.discountTypes.subscribe(function(value)
    //   {
    //     var currentValues = ko.utils.extend({}, self.formValues()); // Create a copy of the object
    //   currentValues.discountTypes = value;
    //   self.formValues(currentValues);
    //     console.log(value)
    //     setTimeout(
    //       function()
    //       {
    //         params.onProductAdded(self.formValues())
    //         console.log(self.formValues())
    //       },1000
    //     )
    //   })
    //   self.formValues1 = ko.computed(function() {
    //     return {
    //       firstName: self.productId(),
    //       lastName: self.name()
    //     };
    //   });
  
    //   console.log(self.formValues1())
  
      
  
     
  
    //   console.log(self.formValues())
  
      // self.logFormValues = function(){
  
  
      //     var product = {
      //     productId: self.productId(),
      //     name: self.name(),
      //     type: self.type(),
      //     quantity: self.quantity(),
      //     availability: self.availability(),
      //     discountTypes: self.discountTypes(),
      //   };
  
      //   console.log(product)
  
        
        
      //     params.onProductAdded(product)
        
  
        
      // }
  
  
      // Function to reset the form
      self.resetForm = function() {
        self.productId('');
        self.name('');
        self.type('');
        self.quantity('');
        self.availability('');
        self.discountTypes([]);
  
        self.products([])
      };
  
  }});
  
  var appViewModel = new AppViewModel();
  ko.applyBindings(appViewModel);
  });
  
  // <button type="button" data-bind="click: addProduct">Add</button>