module.exports = {

    "acs1115": {
        "mhi_acs1115": {
            "title": "Median Household Income",
            "table": "B19013",
            "schema": "data",
            "section": "Income",
            "expression": ["B19013_001"],
            "type": "currency",
            "minval": "1",
            "mininc": "1",
            "usezeroasnull": "yes",
            "favtable": "Median Household Income",
            "favstyle": ["ckmeans", "7", "mh1"],
            "bg": "yes"
        },

        "mhv_acs1115": {
            "title": "Median Home Value",
            "section": "Housing",
            "table": "B25077",
            "schema": "data",
            "expression": ["B25077_001"],
            "type": "currency",
            "minval": "1",
            "mininc": "1",
            "usezeroasnull": "yes",
            "favtable": "Median Home Value",
            "favstyle": ["ckmeans", "7", "mh2"],
            "bg": "yes"
        },

        "mfi_acs1115": {
            "title": "Median Family Income",
            "section": "Income",
            "table": "B19113",
            "schema": "data",
            "expression": ["B19113_001"],
            "type": "currency",
            "minval": "1",
            "mininc": "1",
            "usezeroasnull": "yes",
            "favtable": "Median Family Income",
            "favstyle": ["ckmeans", "7", "mh3"],
            "bg": "yes"
        },

        "pci_acs1115": {
            "title": "Per Capita Income",
            "section": "Income",
            "table": "B19301",
            "schema": "data",
            "expression": ["B19301_001"],
            "type": "currency",
            "minval": "1",
            "mininc": "1",
            "usezeroasnull": "yes",
            "favtable": "Per Capita Income",
            "favstyle": ["ckmeans", "7", "mh4"],
            "bg": "yes"
        },

        "myb_acs1115": {
            "title": "Median Year Housing Unit Built",
            "section": "Housing",
            "table": "B25035",
            "schema": "data",
            "expression": ["B25035_001"],
            "type": "regular",
            "minval": "1939",
            "mininc": "1",
            "usezeroasnull": "yes",
            "favtable": "Median Year Built",
            "favstyle": ["ckmeans", "7", "mh5"],
            "bg": "yes"
        },

        "pop_acs1115": {
            "title": "Total Population",
            "section": "Population",
            "table": "B01001",
            "schema": "data",
            "expression": ["B01001_001"],
            "type": "number",
            "minval": "0",
            "mininc": "1",
            "usezeroasnull": "no",
            "favtable": "Basic Population (total)",
            "favstyle": ["ckmeans", "7", "mh7"],
            "bg": "yes"
        }
        /*,
                "pcth_acs1115": {
                    "title": "Percent Hispanic",
                    "section": "Race",
                    "table": "b03002",
                    "schema": "data",
                    "expression": ["b03002012", "/", "b03002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": ".01",
                    "usezeroasnull": "no",
                    "favtable": "Race-Ethnicity (percent)",
                    "favstyle": ["ckmeans", "7", "mh6"],
                    "bg": "yes"
                },

                "pctw_acs1115": {
                    "title": "Percent White",
                    "section": "Race",
                    "table": "b03002",
                    "schema": "data",
                    "expression": ["b03002003", "/", "b03002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Race-Ethnicity (percent)",
                    "favstyle": ["ckmeans", "7", "mh8"],
                    "bg": "yes"
                },

                "pctb_acs1115": {
                    "title": "Percent Black",
                    "section": "Race",
                    "table": "b03002",
                    "schema": "data",
                    "expression": ["b03002004", "/", "b03002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Race-Ethnicity (percent)",
                    "favstyle": ["ckmeans", "7", "mh9"],
                    "bg": "yes"
                },

                "pctna_acs1115": {
                    "title": "Percent Native American",
                    "section": "Race",
                    "table": "b03002",
                    "schema": "data",
                    "expression": ["b03002005", "/", "b03002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Race-Ethnicity (percent)",
                    "favstyle": ["ckmeans", "7", "sh1"],
                    "bg": "yes"
                },

                "pctasian_acs1115": {
                    "title": "Percent Asian",
                    "section": "Race",
                    "table": "b03002",
                    "schema": "data",
                    "expression": ["b03002006", "/", "b03002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Race-Ethnicity (percent)",
                    "favstyle": ["ckmeans", "7", "sh2"],
                    "bg": "yes"
                },

                "pcthaw_acs1115": {
                    "title": "Percent Hawaiian & PacIs",
                    "section": "Race",
                    "table": "b03002",
                    "schema": "data",
                    "expression": ["b03002007", "/", "b03002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Race-Ethnicity (percent)",
                    "favstyle": ["ckmeans", "7", "sh4"],
                    "bg": "yes"
                },

                "pctmale_acs1115": {
                    "title": "Percent Male",
                    "section": "Population",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["b01001002", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Male & Female (percent)",
                    "favstyle": ["ckmeans", "7", "sh6"],
                    "bg": "yes"
                },

                "pctfemale_acs1115": {
                    "title": "Percent Female",
                    "section": "Population",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["b01001026", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Male & Female (percent)",
                    "favstyle": ["ckmeans", "7", "sh5"],
                    "bg": "yes"
                },

                "ageless10_acs1115": {
                    "title": "Percent Age Less Than 10",
                    "section": "Age",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["(", "b01001003", "+", "b01001004", "+", "b01001027", "+", "b01001028", ")", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Age Group (percent)",
                    "favstyle": ["ckmeans", "7", "mh1"],
                    "bg": "yes"
                },

                "ageless18_acs1115": {
                    "title": "Percent Age Less Than 18",
                    "section": "Age",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["(", "b01001003", "+", "b01001004", "+", "b01001027", "+", "b01001028", "+", "b01001005", "+", "b01001006", "+", "b01001029", "+", "b01001030", ")", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Age Group (percent)",
                    "favstyle": ["ckmeans", "7", "mh2"],
                    "bg": "yes"
                },

                "age18to24_acs1115": {
                    "title": "Percent Age 18 to 24",
                    "section": "Age",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["(", "b01001007", "+", "b01001008", "+", "b01001009", "+", "b01001010", "+", "b01001031", "+", "b01001032", "+", "b01001033", "+", "b01001034", ")", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Age Group (percent)",
                    "favstyle": ["ckmeans", "7", "mh3"],
                    "bg": "yes"
                },

                "age25to34_acs1115": {
                    "title": "Percent Age 25 to 34",
                    "section": "Age",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["(", "b01001011", "+", "b01001012", "+", "b01001035", "+", "b01001036", ")", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Age Group (percent)",
                    "favstyle": ["ckmeans", "7", "mh4"],
                    "bg": "yes"
                },

                "age35to44_acs1115": {
                    "title": "Percent Age 35 to 44",
                    "section": "Age",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["(", "b01001013", "+", "b01001014", "+", "b01001037", "+", "b01001038", ")", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Age Group (percent)",
                    "favstyle": ["ckmeans", "7", "mh5"],
                    "bg": "yes"
                },

                "age45to64_acs1115": {
                    "title": "Percent Age 45 to 64",
                    "section": "Age",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["(", "b01001015", "+", "b01001016", "+", "b01001017", "+", "b01001018", "+", "b01001019", "+", "b01001039", "+", "b01001040", "+", "b01001041", "+", "b01001042", "+", "b01001043", ")", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Age Group (percent)",
                    "favstyle": ["ckmeans", "7", "mh6"],
                    "bg": "yes"
                },

                "age65plus_acs1115": {
                    "title": "Percent Age 65 Plus",
                    "section": "Age",
                    "table": "b01001",
                    "schema": "data",
                    "expression": ["(", "b01001020", "+", "b01001021", "+", "b01001022", "+", "b01001023", "+", "b01001024", "+", "b01001025", "+", "b01001044", "+", "b01001045", "+", "b01001046", "+", "b01001047", "+", "b01001048", "+", "b01001049", ")", "/", "b01001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Age Group (percent)",
                    "favstyle": ["ckmeans", "7", "mh7"],
                    "bg": "yes"
                },

                "medianage_acs1115": {
                    "title": "Median Age",
                    "section": "Age",
                    "table": "b01002",
                    "schema": "data",
                    "expression": ["b01002001"],
                    "type": "number",
                    "minval": "1",
                    "mininc": "0.1",
                    "usezeroasnull": "yes",
                    "favtable": "Median Age",
                    "favstyle": ["ckmeans", "7", "mh8"],
                    "bg": "yes"
                },

                "households_acs1115": {
                    "title": "Total Households",
                    "section": "Household",
                    "table": "b11001",
                    "schema": "data",
                    "expression": ["b11001001"],
                    "type": "number",
                    "minval": "0",
                    "mininc": "1",
                    "usezeroasnull": "no",
                    "favtable": "Household Type (total)",
                    "favstyle": ["ckmeans", "7", "mh9"],
                    "bg": "yes"
                },

                "familyhh_acs1115": {
                    "title": "Percent Family Households",
                    "section": "Household",
                    "table": "b11001",
                    "schema": "data",
                    "expression": ["b11001002", "/", "b11001001"],
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Household Type (total)",
                    "favstyle": ["ckmeans", "7", "mh10"],
                    "bg": "yes"
                },

                "nonfamhh_acs1115": {
                    "title": "Percent Non Family Households",
                    "section": "Household",
                    "table": "b11001",
                    "schema": "data",
                    "expression": ["b11001007", "/", "b11001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Household Type (total)",
                    "favstyle": ["ckmeans", "7", "mh11"],
                    "bg": "yes"
                },

                "housingun_acs1115": {
                    "title": "Total Housing Units",
                    "section": "Housing",
                    "table": "b25002",
                    "schema": "data",
                    "expression": ["b25002001"],
                    "type": "number",
                    "minval": "0",
                    "mininc": "1",
                    "usezeroasnull": "no",
                    "favtable": "Housing Units (total)",
                    "favstyle": ["ckmeans", "7", "mh12"],
                    "bg": "yes"
                },

                "occhu_acs1115": {
                    "title": "Percent Occupied Housing Units",
                    "section": "Housing",
                    "table": "b25002",
                    "schema": "data",
                    "expression": ["b25002002", "/", "b25002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Occupancy (percent)",
                    "favstyle": ["ckmeans", "7", "sh1"],
                    "bg": "yes"
                },

                "vachu_acs1115": {
                    "title": "Percent Vacant Housing Units",
                    "section": "Housing",
                    "table": "b25002",
                    "schema": "data",
                    "expression": ["b25002003", "/", "b25002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Occupancy (percent)",
                    "favstyle": ["ckmeans", "7", "sh2"],
                    "bg": "yes"
                },

                "owned_acs1115": {
                    "title": "Percent Owner Occupied Housing Units",
                    "section": "Housing",
                    "table": "b25003",
                    "schema": "data",
                    "expression": ["b25003002", "/", "b25003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Tenure (percent)",
                    "favstyle": ["ckmeans", "7", "sh4"],
                    "bg": "yes"
                },

                "rented_acs1115": {
                    "title": "Percent Renter Occupied Housing Units",
                    "section": "Housing",
                    "table": "b25003",
                    "schema": "data",
                    "expression": ["b25003003", "/", "b25003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Tenure (percent)",
                    "favstyle": ["ckmeans", "7", "sh5"],
                    "bg": "yes"
                },

                "nohsdipl_acs1115": {
                    "title": "Percent No High School Diploma",
                    "section": "Education",
                    "table": "b15003",
                    "schema": "data",
                    "expression": ["(", "b15003002", "+", "b15003003", "+", "b15003004", "+", "b15003005", "+", "b15003006", "+", "b15003007", "+", "b15003008", "+", "b15003009", "+", "b15003010", "+", "b15003011", "+", "b15003012", "+", "b15003013", "+", "b15003014", "+", "b15003015", "+", "b15003016", ")", "/", "b15003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Educational Attainment (percent)",
                    "favstyle": ["ckmeans", "7", "sh6"],
                    "bg": "yes"
                },

                "hsgradsc_acs1115": {
                    "title": "Percent High School Degree or Some College",
                    "section": "Education",
                    "table": "b15003",
                    "schema": "data",
                    "expression": ["(", "b15003017", "+", "b15003018", "+", "b15003019", "+", "b15003020", "+", "b15003021", ")", "/", "b15003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Educational Attainment (percent)",
                    "favstyle": ["ckmeans", "7", "mh1"],
                    "bg": "yes"
                },

                "bachlhghr_acs1115": {
                    "title": "Percent Bachelors Degree or Higher",
                    "section": "Education",
                    "table": "b15003",
                    "schema": "data",
                    "expression": ["(", "b15003022", "+", "b15003023", "+", "b15003024", "+", "b15003025", ")", "/", "b15003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Educational Attainment (percent)",
                    "favstyle": ["ckmeans", "7", "mh2"],
                    "bg": "yes"
                },

                "medcrent_acs1115": {
                    "title": "Median Contract Rent",
                    "section": "Rent",
                    "table": "b25058",
                    "schema": "data",
                    "expression": ["b25058001"],
                    "type": "currency",
                    "minval": "1",
                    "mininc": "1",
                    "usezeroasnull": "yes",
                    "favtable": "Median Contract Rent",
                    "favstyle": ["ckmeans", "7", "mh3"],
                    "bg": "yes"
                },

                "medgrent_acs1115": {
                    "title": "Median Gross Rent",
                    "section": "Rent",
                    "table": "b25064",
                    "schema": "data",
                    "expression": ["b25064001"],
                    "type": "currency",
                    "minval": "1",
                    "mininc": "1",
                    "usezeroasnull": "yes",
                    "favtable": "Median Gross Rent",
                    "favstyle": ["ckmeans", "7", "mh4"],
                    "bg": "yes"
                },

                "citzbirth_acs1115": {
                    "title": "Percent US Citizen by Birth",
                    "section": "Citizenship",
                    "table": "b05001",
                    "schema": "data",
                    "expression": ["(", "b05001002", "+", "b05001003", "+", "b05001004", ")", "/", "b05001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Citizenship (percent)",
                    "favstyle": ["ckmeans", "7", "mh5"],
                    "bg": "no"
                },

                "citznat_acs1115": {
                    "title": "Percent US Citizen by Naturalization",
                    "section": "Citizenship",
                    "table": "b05001",
                    "schema": "data",
                    "expression": ["b05001005", "/", "b05001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Citizenship (percent)",
                    "favstyle": ["ckmeans", "7", "mh6"],
                    "bg": "no"
                },

                "notcitz_acs1115": {
                    "title": "Percent Not a US Citizen",
                    "section": "Citizenship",
                    "table": "b05001",
                    "schema": "data",
                    "expression": ["b05001006", "/", "b05001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Citizenship (percent)",
                    "favstyle": ["ckmeans", "7", "mh7"],
                    "bg": "no"
                },

                "borninsor_acs1115": {
                    "title": "Percent US Native, Born in State of Residence",
                    "section": "Birthplace",
                    "table": "b05002",
                    "schema": "data",
                    "expression": ["b05002003", "/", "b05002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Birthplace (percent)",
                    "favstyle": ["ckmeans", "7", "mh8"],
                    "bg": "no"
                },

                "bornothst_acs1115": {
                    "title": "Percent US Native, Born in Another State",
                    "section": "Birthplace",
                    "table": "b05002",
                    "schema": "data",
                    "expression": ["b05002004", "/", "b05002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Birthplace (percent)",
                    "favstyle": ["ckmeans", "7", "mh9"],
                    "bg": "no"
                },

                "nativeb_acs1115": {
                    "title": "Percent US Native",
                    "section": "Birthplace",
                    "table": "b05002",
                    "schema": "data",
                    "expression": ["b05002002", "/", "b05002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Birthplace (percent)",
                    "favstyle": ["ckmeans", "7", "mh10"],
                    "bg": "no"
                },

                "foreignb_acs1115": {
                    "title": "Percent Foreign Born",
                    "section": "Birthplace",
                    "table": "b05002",
                    "schema": "data",
                    "expression": ["b05002013", "/", "b05002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Birthplace (percent)",
                    "favstyle": ["ckmeans", "7", "mh11"],
                    "bg": "no"
                },

                "samehouse_acs1115": {
                    "title": "Percent Did Not Move",
                    "section": "Migration",
                    "table": "b07003",
                    "schema": "data",
                    "expression": ["b07003004", "/", "b07003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Migration (percent)",
                    "favstyle": ["ckmeans", "7", "mh12"],
                    "bg": "no"
                },

                "samecnty_acs1115": {
                    "title": "Percent Moved Within County",
                    "section": "Migration",
                    "table": "b07003",
                    "schema": "data",
                    "expression": ["b07003007", "/", "b07003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Migration (percent)",
                    "favstyle": ["ckmeans", "7", "sh1"],
                    "bg": "no"
                },

                "samestate_acs1115": {
                    "title": "Percent Moved from Different County Within State",
                    "section": "Migration",
                    "table": "b07003",
                    "schema": "data",
                    "expression": ["b07003010", "/", "b07003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Migration (percent)",
                    "favstyle": ["ckmeans", "7", "sh2"],
                    "bg": "no"
                },

                "diffstate_acs1115": {
                    "title": "Percent Moved from Different State",
                    "section": "Migration",
                    "table": "b07003",
                    "schema": "data",
                    "expression": ["b07003013", "/", "b07003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Migration (percent)",
                    "favstyle": ["ckmeans", "7", "sh4"],
                    "bg": "no"
                },

                "frmabroad_acs1115": {
                    "title": "Percent Moved From Abroad",
                    "section": "Migration",
                    "table": "b07003",
                    "schema": "data",
                    "expression": ["b07003016", "/", "b07003001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Migration (percent)",
                    "favstyle": ["ckmeans", "7", "sh5"],
                    "bg": "no"
                },

                "carall_acs1115": {
                    "title": "Percent Drove a Car Truck or Van to Work",
                    "section": "Transportation",
                    "table": "b08006",
                    "schema": "data",
                    "expression": ["b08006002", "/", "b08006001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Transportation to Work (percent)",
                    "favstyle": ["ckmeans", "7", "sh6"],
                    "bg": "no"
                },

                "usedpt_acs1115": {
                    "title": "Percent Used Public Transportation",
                    "section": "Transportation",
                    "table": "b08006",
                    "schema": "data",
                    "expression": ["b08006008", "/", "b08006001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Transportation to Work (percent)",
                    "favstyle": ["ckmeans", "7", "mh1"],
                    "bg": "no"
                },

                "bike_acs1115": {
                    "title": "Percent Biked to Work",
                    "section": "Transportation",
                    "table": "b08006",
                    "schema": "data",
                    "expression": ["b08006014", "/", "b08006001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Transportation to Work (percent)",
                    "favstyle": ["ckmeans", "7", "mh2"],
                    "bg": "no"
                },

                "walked_acs1115": {
                    "title": "Percent Walked to Work",
                    "section": "Transportation",
                    "table": "b08006",
                    "schema": "data",
                    "expression": ["b08006015", "/", "b08006001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Transportation to Work (percent)",
                    "favstyle": ["ckmeans", "7", "mh3"],
                    "bg": "no"
                },

                "home_acs1115": {
                    "title": "Percent Worked at Home",
                    "section": "Transportation",
                    "table": "b08006",
                    "schema": "data",
                    "expression": ["b08006017", "/", "b08006001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Transportation to Work (percent)",
                    "favstyle": ["ckmeans", "7", "mh4"],
                    "bg": "no"
                },

                "avghhsize_acs1115": {
                    "title": "Average Household Size",
                    "section": "Housing",
                    "table": "b25010",
                    "schema": "data",
                    "expression": ["b25010001"],
                    "type": "number",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "yes",
                    "favtable": "Average Household Size",
                    "favstyle": ["ckmeans", "7", "mh5"],
                    "bg": "yes"
                },

                "insured_acs1115": {
                    "title": "Percent Insured",
                    "section": "Insurance",
                    "table": "b27001",
                    "schema": "data",
                    "expression": ["(", "b27001004", "+", "b27001007", "+", "b27001010", "+", "b27001013", "+", "b27001016", "+", "b27001019", "+", "b27001022", "+", "b27001025", "+", "b27001028", "+", "b27001032", "+", "b27001035", "+", "b27001038", "+", "b27001041", "+", "b27001044", "+", "b27001047", "+", "b27001050", "+", "b27001053", "+", "b27001056", ")", "/", "b27001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Insurance (percent)",
                    "favstyle": ["ckmeans", "7", "mh7"],
                    "bg": "no"
                },

                "uninsured_acs1115": {
                    "title": "Percent No Insurance",
                    "section": "Insurance",
                    "table": "b27001",
                    "schema": "data",
                    "expression": ["(", "b27001005", "+", "b27001008", "+", "b27001011", "+", "b27001014", "+", "b27001017", "+", "b27001020", "+", "b27001023", "+", "b27001026", "+", "b27001029", "+", "b27001033", "+", "b27001036", "+", "b27001039", "+", "b27001042", "+", "b27001045", "+", "b27001048", "+", "b27001051", "+", "b27001054", "+", "b27001057", ")", "/", "b27001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Insurance (percent)",
                    "favstyle": ["ckmeans", "7", "mh8"],
                    "bg": "no"
                },

                "enrolled_acs1115": {
                    "title": "Percent Enrolled in School",
                    "section": "Education",
                    "table": "b14001",
                    "schema": "data",
                    "expression": ["b14001002", "/", "b14001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Enrolled in School (percent)",
                    "favstyle": ["ckmeans", "7", "mh9"],
                    "bg": "no"
                },

                "k8_acs1115": {
                    "title": "Percent of Enrolled in K-8",
                    "section": "Education",
                    "table": "b14001",
                    "schema": "data",
                    "expression": ["(", "b14001004", "+", "b14001005", "+", "b14001006", ")", "/", "b14001002"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Enrolled in School (percent)",
                    "favstyle": ["ckmeans", "7", "mh10"],
                    "bg": "no"
                },

                "enrhs_acs1115": {
                    "title": "Percent of Enrolled in 9-12",
                    "section": "Education",
                    "table": "b14001",
                    "schema": "data",
                    "expression": ["b14001007", "/", "b14001002"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Enrolled in School (percent)",
                    "favstyle": ["ckmeans", "7", "mh11"],
                    "bg": "no"
                },

                "enrcollege_acs1115": {
                    "title": "Percent of Enrolled in Colleges",
                    "section": "Education",
                    "table": "b14001",
                    "schema": "data",
                    "expression": ["(", "b14001008", "+", "b14001009", ")", "/", "b14001002"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Enrolled in School (percent)",
                    "favstyle": ["ckmeans", "7", "mh12"],
                    "bg": "no"
                },

                "notenrolled_acs1115": {
                    "title": "Percent Not Enrolled in School",
                    "section": "Education",
                    "table": "b14001",
                    "schema": "data",
                    "expression": ["b14001010", "/", "b14001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Enrolled in School (percent)",
                    "favstyle": ["ckmeans", "7", "sh1"],
                    "bg": "no"
                },

                "inpoverty_acs1115": {
                    "title": "Percent in Poverty",
                    "section": "Poverty",
                    "table": "c17002",
                    "schema": "data",
                    "expression": ["(", "c17002002", "+", "c17002003", ")", "/", "c17002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Poverty (percent)",
                    "favstyle": ["ckmeans", "7", "sh2"],
                    "bg": "yes"
                },

                "inpov150_acs1115": {
                    "title": "Percent Below 150% Poverty",
                    "section": "Poverty",
                    "table": "c17002",
                    "schema": "data",
                    "expression": ["(", "c17002002", "+", "c17002003", "+", "c17002004", "+", "c17002005", ")", "/", "c17002001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Poverty (percent)",
                    "favstyle": ["ckmeans", "7", "sh4"],
                    "bg": "yes"
                },

                "disabled_acs1115": {
                    "title": "Percent Disabled",
                    "section": "Disability",
                    "table": "b18101",
                    "schema": "data",
                    "expression": ["(", "b18101004", "+", "b18101007", "+", "b18101010", "+", "b18101013", "+", "b18101016", "+", "b18101019", "+", "b18101023", "+", "b18101026", "+", "b18101029", "+", "b18101032", "+", "b18101035", "+", "b18101038", ")", "/", "b18101001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Disability (percent)",
                    "favstyle": ["ckmeans", "7", "sh5"],
                    "bg": "no"
                },

                "unemp_acs1115": {
                    "title": "Percent Unemployed",
                    "section": "Employment",
                    "table": "b23025",
                    "schema": "data",
                    "expression": ["b23025005", "/", "b23025002"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Unemployment (percent)",
                    "favstyle": ["ckmeans", "7", "sh6"],
                    "bg": "yes"
                },

                "armedforces_acs1115": {
                    "title": "Percent of Labor Force in Armed Forces",
                    "section": "Employment",
                    "table": "b23025",
                    "schema": "data",
                    "expression": ["b23025006", "/", "b23025002"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Unemployment (percent)",
                    "favstyle": ["ckmeans", "7", "mh1"],
                    "bg": "yes"
                },

                "realtaxes_acs1115": {
                    "title": "Median Real Estate Taxes Paid",
                    "section": "Housing",
                    "table": "b25103",
                    "schema": "data",
                    "expression": ["b25103001"],
                    "type": "currency",
                    "minval": "1",
                    "mininc": "1",
                    "usezeroasnull": "yes",
                    "favtable": "",
                    "favstyle": ["ckmeans", "7", "mh2"],
                    "bg": "no"
                },

                "moc_wmc_acs1115": {
                    "title": "Median Monthly Owner Costs (w Mortgage)",
                    "section": "Housing",
                    "table": "b25088",
                    "schema": "data",
                    "expression": ["b25088002"],
                    "type": "currency",
                    "minval": "1",
                    "mininc": "1",
                    "usezeroasnull": "yes",
                    "favtable": "",
                    "favstyle": ["ckmeans", "7", "mh3"],
                    "bg": "yes"
                },

                "moc_nmc_acs1115": {
                    "title": "Median Monthly Owner Costs (no Mortgage)",
                    "section": "Housing",
                    "table": "b25088",
                    "schema": "data",
                    "expression": ["b25088003"],
                    "type": "currency",
                    "minval": "1",
                    "mininc": "1",
                    "usezeroasnull": "yes",
                    "favtable": "",
                    "favstyle": ["ckmeans", "7", "mh4"],
                    "bg": "yes"
                },

                "hhalone_acs1115": {
                    "title": "Pct of Households w Householder Living Alone",
                    "section": "Household",
                    "table": "b11001",
                    "schema": "data",
                    "expression": ["b11001008", "/", "b11001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "",
                    "favstyle": ["ckmeans", "7", "mh5"],
                    "bg": "yes"
                },

                "hhnalone_acs1115": {
                    "title": "Pct of Households w Householder Not Living Alone",
                    "section": "Household",
                    "table": "b11001",
                    "schema": "data",
                    "expression": ["b11001009", "/", "b11001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Household Type (total)",
                    "favstyle": ["ckmeans", "7", "mh6"],
                    "bg": "yes"
                },

                "mcfhh_acs1115": {
                    "title": "Percent Married Couple Family Households",
                    "section": "Household",
                    "table": "b11001",
                    "schema": "data",
                    "expression": ["b11001003", "/", "b11001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Household Type (total)",
                    "favstyle": ["ckmeans", "7", "mh7"],
                    "bg": "yes"
                },

                "mhhnwphh_acs1115": {
                    "title": "Percent Male Householder, No Wife Present Households",
                    "section": "Household",
                    "table": "b11001",
                    "schema": "data",
                    "expression": ["b11001005", "/", "b11001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Household Type (total)",
                    "favstyle": ["ckmeans", "7", "mh8"],
                    "bg": "yes"
                },

                "fhhnhphh_acs1115": {
                    "title": "Percent Female Householder, No Husband Present Households",
                    "section": "Household",
                    "table": "b11001",
                    "schema": "data",
                    "expression": ["b11001006", "/", "b11001001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "Household Type (total)",
                    "favstyle": ["ckmeans", "7", "mh9"],
                    "bg": "yes"
                },

                "hhwchild_acs1115": {
                    "title": "Percent Households w Children Under 18 Present",
                    "section": "Household",
                    "table": "b11005",
                    "schema": "data",
                    "expression": ["b11005002", "/", "b11005001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": "0.01",
                    "usezeroasnull": "no",
                    "favtable": "",
                    "favstyle": ["ckmeans", "7", "mh10"],
                    "bg": "yes"
                },
                "cbhm_acs1115": {
                    "title": "Cost Burdened Households (with a Mortgage)",
                    "section": "Housing",
                    "table": "b25101",
                    "schema": "data",
                    "expression": ["(", "b25101006", "+", "b25101010", "+", "b25101014", "+", "b25101020", "+", "b25101022", ")", "/", "b25101002"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": ".01",
                    "usezeroasnull": "no",
                    "favtable": "Cost Burdened Households (with a Mortgage)",
                    "favstyle": ["ckmeans", "7", "mh10"],
                    "bg": "yes"
                },
                "elvw_acs1115": {
                    "title": "Population 5 and Over That Speaks English Less Than Very Well",
                    "section": "Language",
                    "table": "b06007",
                    "schema": "data",
                    "expression": ["(", "b06007008", "+", "b06007005", ")", "/", "b06007001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": ".01",
                    "usezeroasnull": "no",
                    "favtable": "Place of Birth by Language Spoken at Home and Ability to Speak English",
                    "favstyle": ["ckmeans", "7", "mh10"],
                    "bg": "no"
                },
                "p5ss_acs1115": {
                    "title": "Population 5 and Over That Speaks Spanish",
                    "section": "Language",
                    "table": "b06007",
                    "schema": "data",
                    "expression": ["b06007003", "/", "b06007001"],
                    "type": "percent",
                    "minval": "0",
                    "mininc": ".01",
                    "usezeroasnull": "no",
                    "favtable": "Place of Birth by Language Spoken at Home and Ability to Speak English",
                    "favstyle": ["ckmeans", "7", "mh10"],
                    "bg": "no"
                }
        */
    },
    "c2010": {
        "pop_c2010": {
            "title": "Total Population",
            "table": "p1",
            "schema": "data",
            "section": "Population",
            "expression": ["p1001"],
            "type": "number",
            "minval": "0",
            "mininc": "1",
            "usezeroasnull": "no",
            "favtable": "Total Population",
            "favstyle": ["ckmeans", "7", "mh1"],
            "bg": "yes"
        }
    },
    "c2000": {
        "mhi_c2000": {
            "title": "Median Household Income",
            "table": "p53",
            "schema": "sf3",
            "section": "Income",
            "expression": ["p53001"],
            "type": "currency",
            "minval": "1",
            "mininc": "1",
            "usezeroasnull": "yes",
            "favtable": "Median Household Income",
            "favstyle": ["ckmeans", "7", "mh1"],
            "bg": "yes"
        }
    },
    "c1990": {
        "mhi_c1990": {
            "title": "Median Household Income",
            "table": "p80a",
            "schema": "sf3",
            "section": "Income",
            "expression": ["p80a001"],
            "type": "currency",
            "minval": "1",
            "mininc": "1",
            "usezeroasnull": "yes",
            "favtable": "Median Household Income",
            "favstyle": ["ckmeans", "7", "mh1"],
            "bg": "yes"
        }
    },
    "c1980": {
        "mhi_c1980": {
            "title": "Median Household Income",
            "table": "t069",
            "schema": "sf3",
            "section": "Income",
            "expression": ["t069001"],
            "type": "currency",
            "minval": "1",
            "mininc": "1",
            "usezeroasnull": "yes",
            "favtable": "Median Household Income",
            "favstyle": ["ckmeans", "7", "mh1"],
            "bg": "no"
        }
    }
}
