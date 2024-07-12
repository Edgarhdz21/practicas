Ano = int (input())
c1= int
c2=int
c2=int 
if Ano % 4 == 0:
    c1=1
    if Ano % 100 ==0:
        c2=1
        if Ano%400 ==0:
            c3=1
        else:
            c3=0    
    else :
        c2=0       
else:
    c1=0            
if c1==1 and c2==1 and c3 ==1:
    print ("True")
elif c1==1 and c2==0:
    print ("True")    
else:
    print ("False")    

