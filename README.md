# sbhacks
potty.tech

Tinder for poop

2 users -- logged in vs not

Store -- UserInfo ? -- Firebase Auth
      -- Image Database -- URL, image hash, traits -- color, brightness, name?
      -- User data? -- images swiped or traits swiped
      -- Turd picture -- in firebase store?

User experience
      -- User -- find their ideal poop
	-- 3 pages
 	    -- Swiping page
	    -- Upload
	    -- (signup/login) --> Settings / summary page

Recommendation?
    -- Random?
    -- User data

POST /image -- Add image to the database -- 
   {image_url, hash, color, consistency, brightness, has_objects, secondary_color} 
   -- return yes or no
GET  /user  -- 
POST /like  -- Update user info with new statistics
GET  /images 
