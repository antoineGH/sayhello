import { PageHeader, Typography } from 'antd'
import LessonContent from 'components/lessonContent/LessonContent'
import useTitle from 'hooks/useTitle'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const LessonPage = () => {
	const navigate = useNavigate()
	const urlParams = useParams()
	const lessonID = urlParams?.lessonID
	useTitle(`Lesson ${lessonID}`)
	const { Title } = Typography

	const lessons = [
		{
			id: 1,
			name: 'Lesson ESL1-1',
			author: 'Teacher Barbenes',
			duration: 1,
			difficulty: 1,
			course_id: 1,
		},
		{
			id: 2,
			name: 'Lesson ESL1-2',
			author: 'Teacher Barbenes',
			duration: 1,
			difficulty: 1,
			course_id: 1,
		},
		{
			id: 3,
			name: 'Lesson ESL2-1',
			author: 'Teacher Barbenes',
			duration: 2,
			difficulty: 2,
			course_id: 2,
		},
		{
			id: 4,
			name: 'Lesson ESL2-2',
			author: 'Teacher Barbenes',
			duration: 1,
			difficulty: 1,
			course_id: 2,
		},
		{
			id: 5,
			name: 'Lesson ESL3-1',
			author: 'Teacher Barbenes',
			duration: 3,
			difficulty: 3,
			course_id: 3,
		},
		{
			id: 6,
			name: 'Lesson ESL3-2',
			author: 'Teacher Barbenes',
			duration: 1,
			difficulty: 1,
			course_id: 3,
		},
		{
			id: 7,
			name: 'Lesson ESL4-1',
			author: 'Teacher Barbenes',
			duration: 4,
			difficulty: 4,
			course_id: 4,
		},
		{
			id: 8,
			name: 'Lesson ESL4-2',
			author: 'Teacher Barbenes',
			duration: 4,
			difficulty: 4,
			course_id: 4,
		},
	]

	const lesson = {
		id: 1,
		name: 'Lesson ESL1-1',
		author: 'Barbenes',
		duration: 1,
		difficulty: 1,
		course_id: 1,
		completed: 0,
		quizs: [
			{
				id: 1,
				name: 'Quiz ESL English',
				lesson_id: 1,
			},
			{
				id: 2,
				name: 'Quiz 2 ESL English',
				lesson_id: 2,
			},
		],
		wikidatas: [
			{
				id: 1,
				title: 'Wikidata 1',
				description: `<p>This tutorial will be the fourtenth in the Linux for hackers series and will focus on the MySQL database. Although this is not strictly a Linux tutorial, MySQL is the database of choice on most Linux distributions. In addition, it is the most widely used database behind database driven web applications. This installment is critical to understand before we progress to hacking MySQL databases and before we hack web applications that use MySQL (which there are literally thousands).</p>
				<p>MySQL is an open source, GPL licensed database. That is probably the primary reason you will find it on nearly every Linux distribution. As you know, Linux is also open source and GPL licensed. First developed by MySQL AB of Sweden in 1995, it was purchased by Sun Microsystems in 2008 and Sun Microsystems was then purchased by Oracle in 2009.</p>
				<p>As Oracle is the world's largest database software publisher, the open source community has significant trepidations about Oracle's commitment to keep MySQL open source. As a result, there is now a fork of the MySQL database software called Maria that IS committed to keeping this software and its subsequent versions open source.</p>
				<p>Because it's free, MySQL has become the database of choice for many web applications. Sites and apps that use it include:</p>
				<ul><li>WordPress</li> <li>Facebook</li> <li>LinkedIn</li> <li>Twitter</li> <li>Kayak</li> <li>Walmart.com</li> <li>Wikipedia</li> <li>YouTube</li> </ul><p>Other popular Content Management Systems(CMS) such as Joomla, Drupal, and Ruby on Rails all use MySQL. You get the idea. If you want to develop or attack web applications, you should know MySQL. So, let's get started.</p>
				
				<h2 class="step"><a id="jump-step1" class="anchor"></a>Step 1: Start MySQL</h2><p>Luckily, BackTrack has MySQL already installed (if you are using another distribution, you can usually download and install MySQL from the software repository) and has a graphical start and stop. Let's start our MySQL service.</p> <figure><figure class="whtGallery pad-2" id="32984913docPartGal880005" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/54/66/63524355228002/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> <p>When we do so, we should see a screen like that below pop up briefly and then disappear.</p> <figure><figure class="whtGallery pad-2" id="49976148docPartGal880007" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/31/58/63524355438197/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> 
				
				<h2 class="step"><a id="jump-step2" class="anchor"></a>Step 2: Logging in to MySQL</h2><p>Now that our MySQL service is started, we can begin to use it. First, we need to authenticate ourselves by logging in.</p><p>Open a terminal and type:</p>
				<code>mysql -u root -p</code><br/><br/>
				
				<p>You will be prompted for your password, which is "toor" in BackTrack. It may be different on other systems. Please note that although the username and password for MySQL is the same as the BackTrack username and password, that is not necessarily so on other distributions of Linux and MySQL. Usernames and passwords for the operating system (here is it Linux Ubuntu) and MySQL are separate and distinct.</p>
				<p>This syntax, mysql -u &lt;username&gt; -p, works if we are trying to access a MySQL database on our localhost. This command defaults to using the MySQL instance on the localhost, if not given a hostname or IP address. For remote access (and that will likely be the case as a hacker), we need to provide the hostname or IP address of the system that is hosting the MySQL database, such as:</p>
				<code>mysql -u root -p 192.168.1.101</code><br/><br/>
				
				<p>This will connect us to the MySQL instance at 192.168.1.101 and prompt us for a password.</p><p>This opens up the MySQL command line interface that provides us with the <strong>mysql&gt;</strong> prompt. Like Microsoft's SQL Server, MySQL has a GUI interface both native (MySQL Workbench) and third party (Navicat and TOAD for MySQL). Let's look athe command line interface first and then will will advance to the GUI interface</p>
				<p>As a hacker, the command line interface may be our best opportunity for exploiting the MySQL database, so we should focus on it. It's unlikely that as an unauthorized entrant to the database you will be presented with an easy to use GUI.</p> <figure><figure class="whtGallery pad-2" id="18692159docPartGal880011" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/37/43/63524355585352/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> <p>Please note that this screen reminds us that all commands end in " ;"or "\g" (unlike Microsoft's SQL Server) and that we can get help by typing help; or \h.</p>
				<p>As we are now logged as the systadmin (root), we can navigate unimpeded through the database. If we had logged in as a regular user, our navigation would be limited by the permissions provided us by the system administrator for that user.</p>
				
				<h2 class="step"><a id="jump-step3" class="anchor"></a>Step 3: Show Databases</h2><p>Now that we are logged in to the MySQL database as root, our next step is to find out whether there are any databases worth hacking. The command to find databases is:</p>
				<code>show databases;</code><br/><br/>
				
				<figure><figure class="whtGallery pad-2" id="52989427docPartGal880015" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/17/93/63524510264730/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure><p>Ah Hah! We found a database worth exploring here named "<em>creditcardnumbers</em>".</p>
				
				<h2 class="step"><a id="jump-step4" class="anchor"></a>Step 4: Connect to a Database</h2><p>Once we have logged into the MySQL instance, our next step is to connect to a particular database. In MySQL, like other database management systems, we can connect to the database we are interested in by typing <strong>use</strong> &lt;databasename&gt;. Since we now know that the database we are interested in is named "creditcardnumbers", we simply type:</p>
				<code>use creditcardnumbers;</code><br/><br/> 
				
				<figure><figure class=" pad-2" id="18438570docPartGal880019" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/75/39/63524510705711/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> <p>As you can see, MySQL responds with "<em><strong>Database changed</strong></em>", indicating that we are now connected to the "creditcardnumbers" database.</p><p>Of course, I hope it goes without saying, that you should use the appropriate database name in place here of "creditcardnumbers". Its unlikely that a database admin will be so kind and accommodating as to name a database with such an easily recognizable name, so you may need to do a bit of exploring to find the database of interest.</p>
				
				<h2 class="step"><a id="jump-step5" class="anchor"></a>Step 5: Finding the Tables</h2><p>Now we are connected to the "creditcardnumbers" database and we can do a bit of exploring to see what might be in that database. We can find out what tables are in this database by typing:</p>
				<code>show tables;</code><br/><br/>
				 <figure><figure class="whtGallery pad-2" id="30420020docPartGal880023" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/79/68/63524510844052/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> <p>In the screenshot above, we can see that this database has just one table in it called "cardnumbers". Generally, databases will have numerous tables in them, but we are fortunate here as we can focus our attention on this single table to extract the hackers "golden fleece"!</p>
				
				<h2 class="step"><a id="jump-step6" class="anchor"></a>Step 6: Describe the Table to Discover Its Structure</h2><p>Since we can focus our efforts on this single table, we will need to understand the structure of that table. In subsequent tutorials--when we are hacking this database--we will see that understanding the structure is critical to a successful hack.</p><p>We can see the structure of the table by typing:</p>
				<code>describe cardnumbers;</code><br/><br/>
				 <figure><figure class="whtGallery pad-2" id="23027258docPartGal880027" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/05/21/63524545821630/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> <p>MySQL responds with the critical infornation on the structure of our table of interest. We can see each of the fields and their data type (varchar or int), whether it will accept NULL's, the key, the default values and extra.</p>
				
				<h2 class="step"><a id="jump-step7" class="anchor"></a>Step 7: SELECT Data</h2><p>To actually see the data in the table, we can use the SELECT command. The SELECT command requires to know:</p>
				<ol><li>The table we want to view</li> <li>The columns within that table we want to view</li> </ol><p>Using the format:</p>
				<code>SELECT &lt;columns&gt; FROM &lt;table&gt;</code><br/><br/>
				
				<p>As a handy shortcut if we want to see data from all the columns, we can use the asterix ("*") as a wildcard instead of typing out every single column name. So, to see a dump of all the data from the cardnumbers table, we type:</p>
				<code>SELECT * FROM cardnumbers;</code><br/><br/> 
				
				<figure><figure class="whtGallery pad-2" id="36160126docPartGal880031" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/65/22/63524545593947/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> <p>As we can see, MySQL displayed all the information from the cardnumbers table to our screen.</p>
				
				<h2 class="step"><a id="jump-step8" class="anchor"></a>Step 8: Export Data</h2><p>Now that we know where the data is, we need to export it so that we can use it. MySQL has a command called <strong>mysqldump</strong>. Generally, it is used to create a backup copy of the data. You can run it from any command prompt, but you will need:</p>
				<ol><li>A username (root)</li> <li>The password for that username (toor)</li> <li>The name of the database you want data from (creditcardnumbers)</li> <li>The table within the database you want (cardnumbers)</li> <li>The directory you want to dump to (/tmp)</li> </ol><p>So, to "dump" the data from command line we simply type:</p>
				<code>mysql --tab = /tmp --user root -p creditcardnumbers cardnumbers;</code><br/><br/>
				
				<p>This will send the data to the directory we designated, in this case /tmp.</p>
				
				<h2 class="sectionHeadline"><a id="jump-success" class="anchor"></a>Success!</h2><p>As we can see below (after we changed to the /tmp directory and then listed that directory) we have created two files, <strong>cardnumbers.sql</strong> and <strong>cardnumbers.txt</strong>. The first, cardnumbers.sql, contains a script to create the table necessary to hold the data and the second, cardnumbers.txt, contains the data.</p> <figure><figure class="whtGallery pad-2" id="64134681docPartGal880037" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/28/07/63524546521135/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> <p>Now, we have successfully acquired the key and valuable information from this database, essentially having found the golden fleece of hacking!</p> <figure><figure class="whtGallery pad-2" id="3733178docPartGal880039" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/81/03/63524546367209/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure>`,
				lesson_id: 1,
				wikipicture: [
					{
						id: 1,
						description: 'Picure 1',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFcAgfiF4wsowNxBzNU-5ql0Bhe6GzBfpoQ&usqp=CAU',
						wikidata_id: 1,
					},
					{
						id: 2,
						description: 'Picure 2',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFcAgfiF4wsowNxBzNU-5ql0Bhe6GzBfpoQ&usqp=CAU',
						wikidata_id: 1,
					},
				],
				wikivideo: [
					{
						id: 1,
						description: 'Video 1',
						url: 'https://www.w3schools.com/html/mov_bbb.mp4',
						wikidata_id: 1,
					},
					{
						id: 2,
						description: 'Video 2',
						url: 'https://www.w3schools.com/html/mov_bbb.mp4',
						wikidata_id: 1,
					},
				],
			},
			{
				id: 2,
				title: 'Wikidata 2',
				description: `lol<b>lol</b>`,
				lesson_id: 1,
				wikipicture: [
					{
						id: 3,
						description: 'Picure 3',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFcAgfiF4wsowNxBzNU-5ql0Bhe6GzBfpoQ&usqp=CAU',
						wikidata_id: 2,
					},
					{
						id: 4,
						description: 'Picure 4',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFcAgfiF4wsowNxBzNU-5ql0Bhe6GzBfpoQ&usqp=CAU',
						wikidata_id: 2,
					},
				],
				wikivideo: [
					{
						id: 3,
						description: 'Video 3',
						url: 'https://www.w3schools.com/html/mov_bbb.mp4',
						wikidata_id: 2,
					},
					{
						id: 4,
						description: 'Video 4',
						url: 'https://www.w3schools.com/html/mov_bbb.mp4',
						wikidata_id: 2,
					},
				],
			},
		],
	}

	return (
		<div>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Lesson'
				subTitle='Lesson Summary'
			/>
			<div
				style={{
					margin: '1rem 1rem 1rem 1.5rem',
				}}>
				<div className='quiz_title'>
					<Title level={3}>{lesson.name}</Title>
				</div>
				<div className='quiz_content'>
					<LessonContent lesson={lesson} lessons={lessons} />
				</div>
			</div>
		</div>
	)
}
export default LessonPage
