function circleArea(circle) {

        if (circle && typeof circle.radius === 'number') {
            // Calculate the area using the formula π * radius^2
                return Math.PI * Math.pow(circle.radius, 2);
                  } else {
                      // If no valid radius is provided, return null or handle accordingly
                          return null;
                            }
                            }
}