import calculatingModule from './calculating-module'
import interfaceModule from './interface-module.js'

interfaceModule.btnAddition.addEventListener('click', 
	() => {
		alert(calculatingModule.addition(interfaceModule.numOne.value, interfaceModule.numTwo.value))
	}
)

interfaceModule.btnSubtraction.addEventListener('click', 
	() => {
		alert(calculatingModule.subtraction(interfaceModule.numOne.value, interfaceModule.numTwo.value))
	}
)

interfaceModule.btnMultiplication.addEventListener('click', 
	() => {
		alert(calculatingModule.multiplication(interfaceModule.numOne.value, interfaceModule.numTwo.value))
	}
)

interfaceModule.btnDivision.addEventListener('click', 
	() => {
		alert(calculatingModule.division(interfaceModule.numOne.value, interfaceModule.numTwo.value))
	}
)