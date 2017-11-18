
# Work Queue Component
- [X] merge all work items into a sorted list, convert list to visual items in the list
- adjust styling of work queue items based on state and type of item
  - [ ] show icon and/or different background color for each type of item
  - [ ] show icon of user who is assigned
  - [ ] highlight items assigned to me
- [ ] allow user to add notes to items in the work queue
- [ ] allow user to add tags to items in the work queue
- [ ] allow user to highlight items in the work queue using a filter on content + notes + tags 

# Refactoring and nice-to-haves

- toastr or similar library for notifications, hooked up to rest api call errors
- consider allowing notes to be associated with items within this app
- consider allowing me to ignore items that show up in the queue, or otherwise put some kind of internal status on them to ignore until thier real status changes
- rename `sprint` to something slightly more generic... what if the tasks come from github issues? What if the develoepr works kanban?
