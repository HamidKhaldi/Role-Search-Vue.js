/* eslint-disable prettier/prettier */
// /* eslint-disable */
import $ from "jquery";
import axios from "axios";
import { VueAgile } from "vue-agile";
import Vue2Filters from "vue2-filters";
import * as XLSX from 'xlsx';
import { VueJsExcel } from "vue-js-excel";
import jobDescs from "./jobDesc.json";
import vacancyDataJson from "./vacancyData.json";
//import excelJDs from "./Job-Descriptions.xlsx";

export default {
    name: 'Search',
    components: {
    },
    data() {
        return {
            mobileView: false,
            agile: VueAgile,
            panelMessage: 'Open filter panel to modify results',
            vacancyArr: [],
            filteredVacancyArr: [],
            filterArr: [],
            progOptionsArr: [],
            slOptionsArr: [],
            sslOptionsArr: [],
            locOptionsArr: [],
            sdOptionsArr: [],
            vacancyData: [],
            jobDescData: [
                { "Programme": "Industrial Placement", "Location": "London", "ServiceLine": "Technology", "Intro": "Develop your business knowledge and combine it with your passion for technology to help us solve complex problems for some of the world�s biggest businesses. ", "Description": "At EY, no question is too small, too ambitious or too imaginative. We use our curiosity to ask better questions, that inspire better answers. \n \nGet a head start on your career by fusing business insight with technology, digital and data solutions to transform our client�s businesses. Join a team with real direction and drive. And build skillsets in technology, communication, risk assessment and more. Here, your career is truly yours to build. Experience our world. Your way. \n \nThe pace of technology change is increasing year on year. Now, the focus for our clients is about agility and speed. Within Technology Consulting, we combine digital know-how with advanced technology to help clients understand and transform their businesses. Our high-performing teams are diverse, inclusive and borderless. Our experience helps clients grow, manage, protect and, when necessary, transform their businesses. Together, we shape entire industries by applying the right technological solutions to real world problems. \n \nTechnology in Technology Consulting \n \nWe transform businesses through the power of people, technology and innovation. We deliver technology-enabled transformation to our clients to help generate long-term value. We team closely with our Business Consulting practice to support our clients through their transformation journey. Our teams fuse business insight with technology, digital and data solutions for competitive advantage. \n \nWhat will you be doing? \n \nYou�ll build a career that�s yours to own. With infinite opportunities to lead, learn and transform, we�ll empower you to build a world as unique as you. Here, you�ll be:  \n \n�\tWorking across a range of industries to address technology challenges for our clients \n�\tBuilding your knowledge in a range of market leading digital and emerging technologies \n�\tLeveraging the expertise of our teams to shape our client's technology agenda \n�\tHelping our clients plan and deliver organisation-wide transformation programmes \n�\tYou�ll also be expected to be flexible and may spend large proportions of your time away from your home office  \n \nAre you eligible to apply? \n \nIf you�re in your penultimate year at university and your course includes a placement year, this programme is for you.  \n \nWe operate an open access policy, meaning we don�t screen out applications on your academic performance alone. You will however, need to be working towards an honours degree in any subject - some?programmes?will require a subject relevant to the business area, and have a minimum of grade 4/C GCSE (or equivalent) in English Language and Maths and three A-levels/Five Highers (or equivalent) to be eligible to apply. \n \nLearn more \n \nImmerse yourself in our world whilst exploring your options at the forefront of business. Get to know the part you could play in our organisation. And discover what it means to experience EY your way.  \n \nFind out more about our opportunities and how to apply. \n \nOur world. Your way." }
                ,
                { "Programme": "Industrial Placement", "Location": "London", "ServiceLine": "Consulting", "Intro": "Develop your business knowledge and combine it with your passion for technology to help us solve complex problems for some of the world�s biggest businesses. ", "Description": "At EY, no question is too small, too ambitious or too imaginative. We use our curiosity to ask better questions, that inspire better answers. \n \nGet a head start on your career by fusing business insight with technology, digital and data solutions to transform our client�s businesses. Join a team with real direction and drive. And build skillsets in technology, communication, risk assessment and more. Here, your career is truly yours to build. Experience our world. Your way. \n \nThe pace of technology change is increasing year on year. Now, the focus for our clients is about agility and speed. Within Technology Consulting, we combine digital know-how with advanced technology to help clients understand and transform their businesses. Our high-performing teams are diverse, inclusive and borderless. Our experience helps clients grow, manage, protect and, when necessary, transform their businesses. Together, we shape entire industries by applying the right technological solutions to real world problems. \n \nTechnology in Technology Consulting \n \nWe transform businesses through the power of people, technology and innovation. We deliver technology-enabled transformation to our clients to help generate long-term value. We team closely with our Business Consulting practice to support our clients through their transformation journey. Our teams fuse business insight with technology, digital and data solutions for competitive advantage. \n \nWhat will you be doing? \n \nYou�ll build a career that�s yours to own. With infinite opportunities to lead, learn and transform, we�ll empower you to build a world as unique as you. Here, you�ll be:  \n \n�\tWorking across a range of industries to address technology challenges for our clients \n�\tBuilding your knowledge in a range of market leading digital and emerging technologies \n�\tLeveraging the expertise of our teams to shape our client's technology agenda \n�\tHelping our clients plan and deliver organisation-wide transformation programmes \n�\tYou�ll also be expected to be flexible and may spend large proportions of your time away from your home office  \n \nAre you eligible to apply? \n \nIf you�re in your penultimate year at university and your course includes a placement year, this programme is for you.  \n \nWe operate an open access policy, meaning we don�t screen out applications on your academic performance alone. You will however, need to be working towards an honours degree in any subject - some?programmes?will require a subject relevant to the business area, and have a minimum of grade 4/C GCSE (or equivalent) in English Language and Maths and three A-levels/Five Highers (or equivalent) to be eligible to apply. \n \nLearn more \n \nImmerse yourself in our world whilst exploring your options at the forefront of business. Get to know the part you could play in our organisation. And discover what it means to experience EY your way.  \n \nFind out more about our opportunities and how to apply. \n \nOur world. Your way." }
                ,
                { "Programme": "Graduate", "Location": "London", "ServiceLine": "Law", "Intro": "Dynamic - Develop skills for an exciting career in Law and discover the future you want to build", "Description": "At EY, no question is too small, too ambitious or too imaginative. We use our curiosity to ask better questions, that inspire better answers. That�s how we build a better working world. \n \nAs you progress through the Law Graduate Programme, you�ll be inspired to ask better questions to deliver better solutions to local and global clients, whilst helping them realise their potential. Each day, you�ll encounter and work with leading legal professionals who will give you the benefit of their experience first-hand. You will also learn new skills to help you develop into a fully rounded, future-thinking lawyer.  \n \nJoining forces with colleagues across the business, you�ll become part of an inclusive and collaborative team, who will support your career journey from day one. You�ll gain valuable exposure to clients and build an environment that helps them to thrive. Plus, you�ll have access to the tools, technology and training needed to build a pathway that progresses as you do. Here, your career is truly yours to build. \n \nWhat will you be doing? \n�\tCompleting four, six-month seats within various business areas \n�\tWorking with our lawyers on exciting high-profile work \n�\tMeeting clients and seeing their legal matters through to completion \n�\tBuilding on business development, marketing, and pitches  \n�\tYou may also have the opportunity to undertake overseas secondment \n \nAre you eligible to apply? \n \nWe operate an open access policy, meaning we don�t screen out applications on your academic performance alone. You will, however, need to be working towards an honours degree in any subject, have a minimum of grade 4/C GCSE (or equivalent) in English Language and Maths, and three A-levels/Five Highers (or equivalent) to be eligible to apply.  \n \nWe're also looking for candidates with an understanding of EY Law, in particular our multi-disciplinary approach and the benefits that this brings to our clients. \n \nLearn more \n \nImmerse yourself in our world and be at the forefront of business. Get to know the part you could play in our organisation. And discover what it means to experience EY, your way.  \n \nFind out more about our opportunities and how to apply" }
                ,
                { "Programme": "Graduate", "Location": "Manchester", "ServiceLine": "Law", "Intro": "Develop skills for an exciting career in Law and discover the future you want to build", "Description": "At EY, no question is too small, too ambitious or too imaginative. We use our curiosity to ask better questions, that inspire better answers. That�s how we build a better working world. \n \nAs you progress through the Law Graduate Programme, you�ll be inspired to ask better questions to deliver better solutions to local and global clients, whilst helping them realise their potential. Each day, you�ll encounter and work with leading legal professionals who will give you the benefit of their experience first-hand. You will also learn new skills to help you develop into a fully rounded, future-thinking lawyer.  \n \nJoining forces with colleagues across the business, you�ll become part of an inclusive and collaborative team, who will support your career journey from day one. You�ll gain valuable exposure to clients and build an environment that helps them to thrive. Plus, you�ll have access to the tools, technology and training needed to build a pathway that progresses as you do. Here, your career is truly yours to build. \n \nWhat will you be doing? \n�\tCompleting four, six-month seats within various business areas \n�\tWorking with our lawyers on exciting high-profile work \n�\tMeeting clients and seeing their legal matters through to completion \n�\tBuilding on business development, marketing, and pitches  \n�\tYou may also have the opportunity to undertake overseas secondment \n \nAre you eligible to apply? \n \nWe operate an open access policy, meaning we don�t screen out applications on your academic performance alone. You will, however, need to be working towards an honours degree in any subject, have a minimum of grade 4/C GCSE (or equivalent) in English Language and Maths, and three A-levels/Five Highers (or equivalent) to be eligible to apply.  \n \nWe're also looking for candidates with an understanding of EY Law, in particular our multi-disciplinary approach and the benefits that this brings to our clients. \n \nLearn more \n \nImmerse yourself in our world and be at the forefront of business. Get to know the part you could play in our organisation. And discover what it means to experience EY, your way.  \n \nFind out more about our opportunities and how to apply" }

            ],
            newJobDescs: jobDescs,
            vacancyResponse: vacancyDataJson,
            // excelJDs: excelJDs,
            searchArr: [],
            capabilities: [],
            filteredCapabilities: [],
            searchQuery: "",
            selectedQuery: "",
            searchError: "",
            searchData: false,
            vacsToShow: 9,
            showLoadButton: true,

        }
    },
    mixins: [Vue2Filters.mixin, VueJsExcel],
    watch: {
        searchQuery(newValue) {
            if (this.selectedQuery === newValue) {
                return;
            }

            const query = newValue.toLowerCase();
            if (query === "") {
                this.filteredCapabilities = [];
            }
            this.filteredCapabilities = this.searchArr.filter(function (capability) {
                return capability.toLowerCase().indexOf(query) != -1;
            });
        }
    },
    computed: {
    },
    methods: {
        checkWindow() {
            if (window.innerWidth <= 992) {
                this.mobileView = true;
            } else {
                this.mobileView = false;
                this.$forceUpdate();
            }
        },
        changeHeaderMsg() {
            if (this.panelMessage == 'Open filter panel to modify results') {
                this.panelMessage = 'Close filter panel';
            } else {
                this.panelMessage = 'Open filter panel to modify results';
            }
        },
        selectSearchItem(title) {
            this.selectedQuery = title;
            this.filteredCapabilities = [];
            this.searchQuery = title;
        },
        clearSearch() {
            this.searchQuery = "";
            this.selectedQuery = "";
            this.searchError = "";
            this.filteredVacancyArr = this.vacancyArr;
            this.searchData = false;
            this.filterArr = [];
            this.vacsToShow = 9;
            this.showLoadButton = true;
            $(".sr_filter-dropdown-input").prop("checked", false);
        },
        findSearch() {
            const query = this.searchQuery;

            if (query === "") {
                this.searchError = "Please enter a search term";
                return;
            } else {
                this.searchError = "";
            }

            //Log search
            this.logSearchedCapability(query);

            //Clear autocompletion
            this.filteredCapabilities = [];
            this.filterArr = [];
            this.vacsToShow = 9;
        },
        async logSearchedCapability(query) {
            const foundCap = this.searchArr.filter((item) => {
                return item.toLowerCase() === query.toLowerCase();
            })[0];

            if (foundCap === null || null) {
                return;
            }

            this.filteredVacancyArr = [];

            this.vacancyArr.forEach(vacancy => {
                if (vacancy.Programme && vacancy.Programme.indexOf(foundCap) > -1 && this.filteredVacancyArr.indexOf(vacancy) < 0) {
                    this.filteredVacancyArr.push(vacancy);
                }
                if (vacancy.Location && vacancy.Location.indexOf(foundCap) > -1 && this.filteredVacancyArr.indexOf(vacancy) < 0) {
                    this.filteredVacancyArr.push(vacancy);
                }
                if (vacancy.ServiceLine && vacancy.ServiceLine.indexOf(foundCap) > -1 && this.filteredVacancyArr.indexOf(vacancy) < 0) {
                    this.filteredVacancyArr.push(vacancy);
                }
                if (vacancy.SubServiceLine && vacancy.SubServiceLine.indexOf(foundCap) > -1 && this.filteredVacancyArr.indexOf(vacancy) < 0) {
                    this.filteredVacancyArr.push(vacancy);
                }
                if (vacancy.StartDate && vacancy.StartDate.indexOf(foundCap) > -1 && this.filteredVacancyArr.indexOf(vacancy) < 0) {
                    this.filteredVacancyArr.push(vacancy);
                }
            });

            this.searchData = true;
            if (this.filteredVacancyArr.length > 9) {
                this.showLoadButton = true;
            } else {
                this.showLoadButton = false;
            }

        },
        getFormattedListItem(title) {
            const startIndex = title.toLowerCase().indexOf(this.searchQuery.toLowerCase());

            if (startIndex === -1) {
                return title;
            }

            const queryInTitle = title.substring(startIndex, this.searchQuery.length + startIndex);

            const regex = new RegExp(this.searchQuery, "gi");
            const formattedTitle = title.replace(regex, `<span style="color: #2e2e38;">${queryInTitle}</span>`);
            return formattedTitle;
        },
        filterData(filtArr) {
            let resultsArr = [];
            if (filtArr.length == 0 && !this.searchData) {
                resultsArr = this.vacancyArr;
            } else {
                resultsArr = this.vacancyArr;
                this.filteredVacancyArr = [];
                let finalFiltobj = {
                    SearchQuery: null,
                    Programme: null,
                    Location: null,
                    ServiceLineArr: [],
                    SubServiceLineArr: [],
                    StartDateArr: []
                };
                if (this.searchData) {
                    finalFiltobj.SearchQuery = this.searchQuery;
                }
                filtArr.forEach(filter => {
                    if (filter.type == 'Programme') {
                        finalFiltobj.Programme = filter.value;
                    }
                    if (filter.type == 'Location') {
                        finalFiltobj.Location = filter.value;
                    }
                    if (filter.type == 'ServiceLine') {
                        finalFiltobj.ServiceLineArr.push(filter.value);
                    }
                    if (filter.type == 'SubServiceLine') {
                        finalFiltobj.SubServiceLineArr.push(filter.value);
                    }
                    if (filter.type == 'StartDate') {
                        finalFiltobj.StartDateArr.push(filter.value);
                    }
                });

                if (finalFiltobj.SearchQuery != null) {
                    let tempSearchResults = [];
                    resultsArr.forEach(result => {
                        if (result.Programme && result.Programme.indexOf(finalFiltobj.SearchQuery) > -1 && tempSearchResults.indexOf(result) < 0) {
                            tempSearchResults.push(result);
                        }
                        if (result.Location && result.Location.indexOf(finalFiltobj.SearchQuery) > -1 && tempSearchResults.indexOf(result) < 0) {
                            tempSearchResults.push(result);
                        }
                        if (result.ServiceLine && result.ServiceLine.indexOf(finalFiltobj.SearchQuery) > -1 && tempSearchResults.indexOf(result) < 0) {
                            tempSearchResults.push(result);
                        }
                        if (result.SubServiceLine && result.SubServiceLine.indexOf(finalFiltobj.SearchQuery) > -1 && tempSearchResults.indexOf(result) < 0) {
                            tempSearchResults.push(result);
                        }
                        if (result.StartDate && result.StartDate.indexOf(finalFiltobj.SearchQuery) > -1 && tempSearchResults.indexOf(result) < 0) {
                            tempSearchResults.push(result);
                        }
                    })
                    resultsArr = tempSearchResults;
                }
                if (finalFiltobj.Programme != null) {
                    resultsArr = resultsArr.filter((vac) => vac.Programme === finalFiltobj.Programme);
                }
                if (finalFiltobj.Location != null) {
                    resultsArr = resultsArr.filter((vac) => vac.Location === finalFiltobj.Location);
                }
                if (finalFiltobj.ServiceLineArr.length > 0) {
                    resultsArr = resultsArr.filter((vac) => finalFiltobj.ServiceLineArr.indexOf(vac.ServiceLine) > -1);
                }
                if (finalFiltobj.SubServiceLineArr.length > 0) {
                    resultsArr = resultsArr.filter((vac) => finalFiltobj.SubServiceLineArr.indexOf(vac.SubServiceLine) > -1);
                }
                if (finalFiltobj.StartDateArr.length > 0) {
                    resultsArr = resultsArr.filter((vac) => finalFiltobj.StartDateArr.indexOf(vac.StartDate) > -1);
                }
            }

            this.filteredVacancyArr = resultsArr;
            if (this.filteredVacancyArr.length > 9) {
                this.showLoadButton = true;
            } else {
                this.showLoadButton = false;
            }
        },
        getFilterVal(value, type) {
            if (type == 'Programme' || type == 'Location') {
                let filterMatch = this.filterArr.filter((item) => item.type === type);
                if (filterMatch.length == 0) {
                    this.filterArr.push({
                        'value': value,
                        'type': type
                    })
                } else {
                    let clickedInput = $(".sr_filter-dropdown-input[name='" + type + "'][value='" + value + "']").eq(0);
                    clickedInput.prop("checked", false);
                    if (filterMatch[0]['value'] == value) {
                        this.filterArr = this.filterArr.filter((item) => item.value !== value);
                    } else if (filterMatch[0]['value'] != value) {
                        filterMatch[0]['value'] = value;
                    }
                }
            } else {
                let filterMatch = this.filterArr.filter((item) => item.value === value);
                if (filterMatch.length == 0) {
                    this.filterArr.push({
                        'value': value,
                        'type': type
                    })
                } else {
                    let clickedInput = $(".sr_filter-dropdown-input[name='" + type + "'][value='" + value + "']").eq(0);
                    clickedInput.prop("checked", false);
                    this.filterArr = this.filterArr.filter((item) => item.value !== value);
                }
            }
            this.vacsToShow = 9;
            this.filterData(this.filterArr);
        },
        showOverlay(id) {
            $('.sr_search-results-list--item').removeClass('highlight-item');
            $("#" + id).addClass('highlight-item');
        },
        hideOverlay(id) {
            $("#" + id).removeClass('highlight-item');
        },
        getToken() {
            let body = {
                grant_type: 'password',
                username: 'EYPortalWebAPIUser',
                password: '78ddVd6a1b3tKcrc'
            };
            const that = this;
            $.ajax({
                url: 'https://eyapi.ambertrack.global/token',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: body,
                success: function (result) {
                    that.getCourseData(result.access_token);
                },
                error: function (error) {
                    console.log('error', error);
                },
            });
        },
        getCourseData(token) {
            const that = this;
            // $.ajax({
            //     type: "GET", 
            //     url: "../vacancyData.json", 
            //     dataType: 'json', 
            //     // crossDomain: true,
            //     contentType: "application/json", 
            //     headers: { 
            //         // "Authorization": "Bearer " + token, 
            //         "Access-Control-Allow-Origin": "*", 
            //         "Access-Control-Allow-Methods": "GET, OPTIONS",
            //         "Cache-Control": "no-cache", 
            //     }, 
            //     data: {}, 
            //     success: function (response) { 
                const response = this.vacancyResponse;
                    //console.log('ajax resp ', response); 
                    that.vacancyData = response;
                    that.vacancyData.forEach(dataItem => {
                        dataItem.Roles.forEach(vacancy => {
                            that.vacancyArr.push({
                                Programme: vacancy['Vacancy Details Programme'],
                                ServiceLine: vacancy['Vacancy Details Service Line'],
                                SubServiceLine: vacancy['Vacancy Details Sub Service Line'],
                                StartDate: vacancy['Vacancy Details Start Date'],
                                Location: vacancy['Vacancy Details Location'],
                                IntakeUrl: dataItem.IntakeUrl
                            });
                        });
                    });
                    that.filteredVacancyArr = that.vacancyArr;
                    that.vacancyArr.forEach(vacancy => {
                        if (vacancy.Programme && vacancy.Programme != '' && that.progOptionsArr.indexOf(vacancy.Programme) < 0) {
                            that.progOptionsArr.push(vacancy.Programme);
                        }
                        if (vacancy.ServiceLine && vacancy.ServiceLine != '' && that.slOptionsArr.indexOf(vacancy.ServiceLine) < 0) {
                            that.slOptionsArr.push(vacancy.ServiceLine);
                        }
                        if (vacancy.SubServiceLine && vacancy.SubServiceLine != '' && that.sslOptionsArr.indexOf(vacancy.SubServiceLine) < 0) {
                            that.sslOptionsArr.push(vacancy.SubServiceLine);
                        }
                        if (vacancy.Location && vacancy.Location != '' && that.locOptionsArr.indexOf(vacancy.Location) < 0) {
                            that.locOptionsArr.push(vacancy.Location);
                        }
                        if (vacancy.StartDate && vacancy.StartDate != '' && that.sdOptionsArr.indexOf(vacancy.StartDate) < 0) {
                            that.sdOptionsArr.push(vacancy.StartDate);
                        }
                        if (vacancy.Programme && that.searchArr.indexOf(vacancy.Programme) < 0) {
                            that.searchArr.push(vacancy.Programme);
                        }
                        if (vacancy.Location && that.searchArr.indexOf(vacancy.Location) < 0) {
                            that.searchArr.push(vacancy.Location);
                        }
                        if (vacancy.ServiceLine && that.searchArr.indexOf(vacancy.ServiceLine) < 0) {
                            that.searchArr.push(vacancy.ServiceLine);
                        }
                        if (vacancy.SubServiceLine && that.searchArr.indexOf(vacancy.SubServiceLine) < 0) {
                            that.searchArr.push(vacancy.SubServiceLine);
                        }
                        if (vacancy.StartDate && that.searchArr.indexOf(vacancy.StartDate) < 0) {
                            that.searchArr.push(vacancy.StartDate);
                        }
                    });
                    //match vacancies with descriptions
                    that.vacancyArr.forEach(vacancy => {
                        that.jobDescData.forEach(jobDesc => {
                            if (vacancy.Programme == jobDesc.Programme && vacancy.Location == jobDesc.Location && vacancy.ServiceLine == jobDesc.ServiceLine) {
                                vacancy.Intro = jobDesc.Intro;
                                vacancy.Description = jobDesc.Description;
                            }
                        });
                    });
            //     }, 
            //     error: function (error) { 
            //         console.log('error  ', error);
            //     }
            // })

            // axios.get("https://eyapi.ambertrack.global/api/v1/OpenRolesEx", {
            //     headers: {
            //         "Access-Control-Allow-Origin": "*",
            //         "Content-Type": "application/json",
            //         "Authorization": "Bearer " + token
            //     }
            // })
            //     .then(response => {
            //         //console.log('course data', response.data);
            //         this.vacancyData = response.data;
            //         this.vacancyData.forEach(dataItem => {
            //             dataItem.Roles.forEach(vacancy => {
            //                 this.vacancyArr.push({
            //                     Programme: vacancy['Vacancy Details Programme'],
            //                     ServiceLine: vacancy['Vacancy Details Service Line'],
            //                     SubServiceLine: vacancy['Vacancy Details Sub Service Line'],
            //                     StartDate: vacancy['Vacancy Details Start Date'],
            //                     Location: vacancy['Vacancy Details Location'],
            //                     IntakeUrl: dataItem.IntakeUrl
            //                 });
            //             });
            //         });
            //         this.filteredVacancyArr = this.vacancyArr;
            //         this.vacancyArr.forEach(vacancy => {
            //             if (vacancy.Programme && vacancy.Programme != '' && this.progOptionsArr.indexOf(vacancy.Programme) < 0) {
            //                 this.progOptionsArr.push(vacancy.Programme);
            //             }
            //             if (vacancy.ServiceLine && vacancy.ServiceLine != '' && this.slOptionsArr.indexOf(vacancy.ServiceLine) < 0) {
            //                 this.slOptionsArr.push(vacancy.ServiceLine);
            //             }
            //             if (vacancy.SubServiceLine && vacancy.SubServiceLine != '' && this.sslOptionsArr.indexOf(vacancy.SubServiceLine) < 0) {
            //                 this.sslOptionsArr.push(vacancy.SubServiceLine);
            //             }
            //             if (vacancy.Location && vacancy.Location != '' && this.locOptionsArr.indexOf(vacancy.Location) < 0) {
            //                 this.locOptionsArr.push(vacancy.Location);
            //             }
            //             if (vacancy.StartDate && vacancy.StartDate != '' && this.sdOptionsArr.indexOf(vacancy.StartDate) < 0) {
            //                 this.sdOptionsArr.push(vacancy.StartDate);
            //             }
            //             if (vacancy.Programme && this.searchArr.indexOf(vacancy.Programme) < 0) {
            //                 this.searchArr.push(vacancy.Programme);
            //             }
            //             if (vacancy.Location && this.searchArr.indexOf(vacancy.Location) < 0) {
            //                 this.searchArr.push(vacancy.Location);
            //             }
            //             if (vacancy.ServiceLine && this.searchArr.indexOf(vacancy.ServiceLine) < 0) {
            //                 this.searchArr.push(vacancy.ServiceLine);
            //             }
            //             if (vacancy.SubServiceLine && this.searchArr.indexOf(vacancy.SubServiceLine) < 0) {
            //                 this.searchArr.push(vacancy.SubServiceLine);
            //             }
            //             if (vacancy.StartDate && this.searchArr.indexOf(vacancy.StartDate) < 0) {
            //                 this.searchArr.push(vacancy.StartDate);
            //             }
            //         });
            //         //match vacancies with descriptions
            //         this.vacancyArr.forEach(vacancy => {
            //             this.jobDescData.forEach(jobDesc => {
            //                 if (vacancy.Programme == jobDesc.Programme && vacancy.Location == jobDesc.Location && vacancy.ServiceLine == jobDesc.ServiceLine) {
            //                     vacancy.Intro = jobDesc.Intro;
            //                     vacancy.Description = jobDesc.Description;
            //                 }
            //             });
            //         });
            //     })
            //     .catch(function (error) {
            //         console.log('Jobs data api Error', error);
            //     });
        },
        getJobDesc() {
            // axios.get('http://geraldineedwards.com/Job-Descriptions.xlsx')
            // .then((response) => {
            //     console.log('response ', response);
            //     let data = new Uint8Array(response.data);
            //     var workbook = XLSX.read(data, {type:'buffer'});
            //     console.log('workbook', workbook);
            //     let sheetName = workbook.SheetNames[0];
            //     let worksheet = workbook.Sheets[sheetName];
            //     const result = XLSX.utils.sheet_to_json(worksheet, { raw: true, header:["Progamme","Location","ServiceLine", "Intro", "Description"]});
            //     console.log('axios final array', result);
            // }).catch(err => {
            //     console.log(' err ', err);
            // })

            // axios.get("https://eygb.sharepoint.com/sites/CSG-Test-V2/Searchable-Roles/_api/web/lists/getByTitle('Lst_Job-Descriptions-3')/items" , {
            //     headers: {
            //       "Access-Control-Allow-Origin": "*",
            //       "Content-Type": "application/json",
            //     }
            // })
            // .then(response => {
                
            //     console.log('response list', response);
            // })
            // .catch(function (error) {
            //     console.log('Error', error);
            // });
            // console.log('job descs', this.newJobDescs);
        //     // var workbook = XLSX.read(this.excelJDs, {type:'binary'});
        //     // let sheetName = workbook.SheetNames[0];
        //     // let worksheet = workbook.Sheets[sheetName];
        //     // const result = XLSX.utils.sheet_to_txt(worksheet, {raw: true});
        //     // console.log('final array', result);
        },            
        showMore(arrLength) {
            if ((this.vacsToShow + 9) <= arrLength) {
                this.vacsToShow = this.vacsToShow + 9;
                this.showLoadButton = true;
            } else {
                this.showLoadButton = false;
                this.vacsToShow = arrLength;

            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.checkWindow);
        this.getToken();
        this.getJobDesc();
    },

}