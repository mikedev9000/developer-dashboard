
# Structure of a "task" in this UI:

```
{
  id: 'XYZ-001',
  title: 'Make toast',
  description: 'Everybody likes toast, so just build this feature already!',
  priority: 100,
  assignee: 'mrmeseeks',
  state: 'IN_PROGRESS'
}
```

# Structure of an issue returned by searching JIRA (each element inside of respond body's `issues` list:

```
{
  "key" : "SCRUM-24",
  "fields" : {
    "issuelinks" : [],
    "description" : null,
    "progress" : {
        "total" : 0,
        "progress" : 0
    },
    "resolutiondate" : null,
    "customfield_10000" : null,
    "versions" : [],
    "priority" : {
        "id" : "3",
        "name" : "Medium",
        "iconUrl" : "http://192.168.99.100:32769/images/icons/priorities/medium.svg",
        "self" : "http://192.168.99.100:32769/rest/api/2/priority/3"
    },
    "issuetype" : {
        "subtask" : true,
        "self" : "http://192.168.99.100:32769/rest/api/2/issuetype/10000",
        "name" : "Sub-task",
        "description" : "The sub-task of the issue",
        "id" : "10000",
        "iconUrl" : "http://192.168.99.100:32769/images/icons/issuetypes/subtask_alternate.png"
    },
    "created" : "2017-11-19T15:11:52.000+0000",
    "watches" : {
        "self" : "http://192.168.99.100:32769/rest/api/2/issue/SCRUM-24/watchers",
        "watchCount" : 1,
        "isWatching" : true
    },
    "timeoriginalestimate" : null,
    "creator" : {
        "name" : "mikedev9000",
        "avatarUrls" : {
          "32x32" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=32",
          "48x48" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=48",
          "16x16" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=16",
          "24x24" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=24"
        },
        "timeZone" : "Etc/UTC",
        "active" : true,
        "key" : "mikedev9000",
        "displayName" : "michael1.cis@gmail.com",
        "emailAddress" : "michael1.cis@gmail.com",
        "self" : "http://192.168.99.100:32769/rest/api/2/user?username=mikedev9000"
    },
    "status" : {
        "id" : "10000",
        "name" : "To Do",
        "description" : "",
        "iconUrl" : "http://192.168.99.100:32769/",
        "statusCategory" : {
          "self" : "http://192.168.99.100:32769/rest/api/2/statuscategory/2",
          "colorName" : "blue-gray",
          "key" : "new",
          "id" : 2,
          "name" : "To Do"
        },
        "self" : "http://192.168.99.100:32769/rest/api/2/status/10000"
    },
    "aggregatetimespent" : null,
    "updated" : "2017-11-19T15:11:52.000+0000",
    "reporter" : {
        "timeZone" : "Etc/UTC",
        "key" : "mikedev9000",
        "displayName" : "michael1.cis@gmail.com",
        "active" : true,
        "self" : "http://192.168.99.100:32769/rest/api/2/user?username=mikedev9000",
        "emailAddress" : "michael1.cis@gmail.com",
        "name" : "mikedev9000",
        "avatarUrls" : {
          "16x16" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=16",
          "24x24" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=24",
          "48x48" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=48",
          "32x32" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=32"
        }
    },
    "parent" : {
        "key" : "SCRUM-13",
        "id" : "10012",
        "fields" : {
          "summary" : "As a developer, I can update details on an item using the Detail View >> Click the \"SCRUM-13\" link at the top of this card to open the detail view",
          "priority" : {
              "self" : "http://192.168.99.100:32769/rest/api/2/priority/3",
              "iconUrl" : "http://192.168.99.100:32769/images/icons/priorities/medium.svg",
              "name" : "Medium",
              "id" : "3"
          },
          "issuetype" : {
              "iconUrl" : "http://192.168.99.100:32769/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
              "avatarId" : 10303,
              "name" : "Bug",
              "id" : "10004",
              "description" : "A problem which impairs or prevents the functions of the product.",
              "self" : "http://192.168.99.100:32769/rest/api/2/issuetype/10004",
              "subtask" : false
          },
          "status" : {
              "statusCategory" : {
                "colorName" : "blue-gray",
                "self" : "http://192.168.99.100:32769/rest/api/2/statuscategory/2",
                "name" : "To Do",
                "id" : 2,
                "key" : "new"
              },
              "iconUrl" : "http://192.168.99.100:32769/",
              "name" : "To Do",
              "id" : "10000",
              "description" : "",
              "self" : "http://192.168.99.100:32769/rest/api/2/status/10000"
          }
        },
        "self" : "http://192.168.99.100:32769/rest/api/2/issue/10012"
    },
    "timeestimate" : null,
    "aggregatetimeoriginalestimate" : null,
    "components" : [],
    "aggregatetimeestimate" : null,
    "timespent" : null,
    "project" : {
        "name" : "scrum-example",
        "id" : "10000",
        "key" : "SCRUM",
        "avatarUrls" : {
          "24x24" : "http://192.168.99.100:32769/secure/projectavatar?size=small&avatarId=10324",
          "16x16" : "http://192.168.99.100:32769/secure/projectavatar?size=xsmall&avatarId=10324",
          "32x32" : "http://192.168.99.100:32769/secure/projectavatar?size=medium&avatarId=10324",
          "48x48" : "http://192.168.99.100:32769/secure/projectavatar?avatarId=10324"
        },
        "self" : "http://192.168.99.100:32769/rest/api/2/project/10000"
    },
    "resolution" : null,
    "labels" : [],
    "duedate" : null,
    "assignee" : {
        "avatarUrls" : {
          "48x48" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=48",
          "32x32" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=32",
          "16x16" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=16",
          "24x24" : "http://www.gravatar.com/avatar/7cab61d102e0ec19fd09e5b4a1001d2e?d=mm&s=24"
        },
        "name" : "mikedev9000",
        "emailAddress" : "michael1.cis@gmail.com",
        "self" : "http://192.168.99.100:32769/rest/api/2/user?username=mikedev9000",
        "key" : "mikedev9000",
        "displayName" : "michael1.cis@gmail.com",
        "active" : true,
        "timeZone" : "Etc/UTC"
    },
    "fixVersions" : [],
    "subtasks" : [],
    "customfield_10004" : [
        "com.atlassian.greenhopper.service.sprint.Sprint@38b1a49c[id=1,rapidViewId=1,state=ACTIVE,name=Sample Sprint 2,startDate=2017-11-12T05:40:08.403Z,endDate=2017-11-26T06:00:08.403Z,completeDate=<null>,sequence=1,goal=<null>]"
    ],
    "environment" : null,
    "workratio" : -1,
    "customfield_10005" : "0|i00053:",
    "votes" : {
        "hasVoted" : false,
        "votes" : 0,
        "self" : "http://192.168.99.100:32769/rest/api/2/issue/SCRUM-24/votes"
    },
    "summary" : "horay, my subtask is here!",
    "lastViewed" : "2017-11-19T15:11:53.201+0000",
    "aggregateprogress" : {
        "total" : 0,
        "progress" : 0
    }
  },
  "expand" : "operations,versionedRepresentations,editmeta,changelog,renderedFields",
  "id" : "10023",
  "self" : "http://192.168.99.100:32769/rest/api/2/issue/10023"
}
```

# Interesting fields:

task.id : issue.key
task.title : issue.fields.summary
task.description : issue.description
task.prority: issue.fields.priority.(id|name)
task.assignee: issue.fields.assignee?.name
task.? : issue.fields.issueType.(name|subtask)
task.? : issue.fields.status.(name|iconUrl)
task.? : issue.fields.project.key
task.? : issue.fields.resolution?
task.? : issue.fields.assignee.avatarUrls.24x24