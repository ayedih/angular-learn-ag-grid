(
  function() 
  {

  document.addEventListener(
    'DOMContentLoaded', function() 
    {

      var gridDiv = document.querySelector('#myGrid');
      var gridOptions = {};

      new ag.grid.Grid(gridDiv, gridOptions);
       console.log('gridDiv = ' + gridDiv);

    }
  )
  }
)