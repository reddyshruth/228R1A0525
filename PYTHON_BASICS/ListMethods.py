my_list={1,2,3,4}
'''
List methods:
1.sort()
2.clear()
3.append()
4.count()
5.extend([4])
6.insert()
7.index()
8.len()
9.remove()
10.pop()
11.reverse()
12.copy()
13.min()
14.max()
15.del()
'''
mylist=[1,2,3,4,55,6]
mylist.sort()
print(mylist)
mylist.append(99)
print(mylist)
mylist.extend([44,77,98])
print(mylist)
print(mylist.count(4))
mylist.insert(1,22)
print(mylist)
max = max(mylist)
print(max)
min = min(mylist)
print(min)
#deliting an element of index 2
del mylist[2]
print(mylist)
copyalist = mylist.copy()
print(" coppied list = ",copylist)
copylist.reverse()
print("Reverse list ",copylist.reverse())








