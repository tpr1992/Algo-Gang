# # -----------------------------------------------------------------------------------
# # Linear Regression Notes
#
# # Loss
# When we think about how we can assign a slope and intercept to fit a set of points, we have to define what the best fit is.
#
# For each data point, we calculate loss, a number that measures how bad the model’s (in this case, the line’s) prediction was. You may have seen this being referred to as error.
#
# We can think about loss as the squared distance from the point to the line. We do the squared distance (instead of just the distance) so that points above and below the line both contribute to total loss in the same way:

# In this example:
#
# For point A, the squared distance is 9 (3²)
# For point B, the squared distance is 1 (1²)
# So the total loss, with this model, is 10. If we found a line that had less loss than 10, that line would be a better model for this data.

# 1. We have three points, (1, 5), (2, 1), and (3, 3). We are trying to find a line that produces lowest loss.
#
# We have provided you the list of x-values, x, and y-values, y, for these points.
#
# Find the y-values that the line with weights m1 and b1 would predict for the x-values given. Store these in a list called y_predicted1.

# 2. Find the y values that the line with weights m2 and b2 would predict for the x-values given. Store these in a list called y_predicted2.
#
# 3. Create a variable called total_loss1 and set it equal to zero.
#
# Then, find the sum of the squared distance between the actual y-values of the points and the y_predicted1 values by looping through the list:
#
# Calculating the difference between y and y_predicted1
# Squaring the difference
# Adding it to total_loss1
#
# 4. Create a variable called total_loss2 and set it equal to zero.
#
# Find the sum of the squared distance between the actual y-values of the points and the y_predicted2 values by looping through the list:
#
# Calculating the difference between y and y_predicted2
# Squaring the difference
# Adding it to total_loss2
#
# 5. Print out total_loss1 and total_loss2. Out of these two lines, which would you use to model the points?
#
# Create a variable called better_fit and assign it to 1 if line 1 fits the data better and 2 if line 2 fits the data better.



x = [1, 2, 3]
y = [5, 1, 3]

#y = x
m1 = 1
b1 = 0

#y = 0.5x + 1
m2 = 0.5
b2 = 1

y_predicted1 = [m1*x_val + b1 for x_val in x]
y_predicted2 = [m2*x_val + b2 for x_val in x]

total_loss1 = 0
total_loss2 = 0

for i in range(len(y)):
  total_loss1 += (y[i] - y_predicted1[i])**2
  total_loss2 += (y[i] - y_predicted2[i])**2

  print(total_loss1, total_loss2)
  better_fit = 2


# Gradient Descent
# We derive these gradients using calculus. It is not crucial to understand how we arrive at the gradient equation. To find the gradient of loss as intercept changes, the formula comes out to be:
#
# \frac{2}{N}\sum_{i=1}^{N}-(y_i-(mx_i+b))
# N
# 2
# ​
# i=1
# ∑
# N
# ​	 −(y
# i
# ​	 −(mx
# i
# ​	 +b))
# N is the number of points we have in our dataset
# m is the current gradient guess
# b is the current intercept guess
# Basically:
#
# we find the sum of y_value - (m*x_value + b) for all the y_values and x_values we have
# and then we multiply the sum by a factor of -2/N. N is the number of points we have.
# Define a function called get_gradient_at_b() that takes in a set of x values, x, a set of y values, y, a slope m, and an intercept value b.

def get_gradient_at_b(x, y, m, b):
    diff = 0
    N = len(x)
    for i in range(0, len(x)):
      y_val = y[i]
      x_val = x[i]
      diff += (y_val - ((m * x_val) + b))

    b_gradient = -2/N * diff
    return b_gradient
