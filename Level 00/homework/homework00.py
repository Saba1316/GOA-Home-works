from turtle import *
    

#we want to paint a house

#step 1: draw a triangle

speed(10)

width(10)
color("purple")

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90) 

forward(200)
left(90)
#end of square

#drawing a door

forward(70)
left(90)
color("YELLOW")
begin_fill()
forward(120)

right(90)
      
forward(60)    
right(90)
      
forward(120)
end_fill()

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#end of drawing a door

#drawing windows

penup()
goto(180,180)

     
pendown()
color("brown")
begin_fill()
right(60)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)
end_fill()


penup()
goto(20,180)
pendown()
begin_fill()
right(90)
forward(40)

right(90)
forward(40)

right(90)
forward(40)
        
right(90)         
forward(40)
end_fill()

#end of drawing house


exitonclick()