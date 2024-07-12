#Given an integer, n, perform the following conditional actions:
# If  is odd, print Weird
# If  is even and in the inclusive range of   2  to 5  , print Not Weird
# If  is even and in the inclusive range of 6 to 20 , print Weird
# If  is even and greater than 20 , print Not Weird

print ("Ingresa un numero")
numero = int (input())
if  numero % 2 !=0 :
    print ("Weird") 
if numero % 2 == 0 and numero > 20 :
    print ("Not Weird")
if numero % 2 == 0 and numero >= 2 and numero < 5 :
    print ("Not Weird")
if numero % 2 == 0 and numero >= 6 and numero <= 20 :
    print ("Weird")

    

