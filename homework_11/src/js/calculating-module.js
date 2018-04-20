const addition = (num1, num2) =>{
	return Number(num1) + Number(num2);
}
const subtraction = (num1, num2) =>{
	return num1 - num2;
}
const multiplication = (num1, num2) =>{
	return num1 * num2;
}
const division = (num1, num2) =>{
	return num1 / num2;
}

export default {
	addition : addition,
	subtraction : subtraction,
	multiplication : multiplication,
	division : division
}