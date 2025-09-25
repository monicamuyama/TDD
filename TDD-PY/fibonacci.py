def fibonacci(n:int)->int:
    # if n == 0:
    #     return 0
    # if n == 1:
    #     return 1
    # return fibonacci(n-1) + fibonacci(n-2)
    
    if n < 0:
       raise ValueError("Fibonacci is not defined for negative numbers")
    if n == 0:
       return 0
    elif n == 1:
        return 1
    else:  
        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b


      