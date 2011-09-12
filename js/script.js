function DV()
{
	var self = this;
	this.rows=
	[
	["ES",0.0,0.0,0.0,0.0,0.0,0.1,0.2,0.7,1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0,0.0,0.0],
	["IT",0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["FR",0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.2,2.3,3.3,3.8,3.3,2.3,1.2,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["PT",0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["GB",0.0,0.0,0.0,0.0,0.0,0.1,0.2,0.7,1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0,0.0,0.0],
	["DE",0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["CH",0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.2,2.3,3.3,3.8,3.3,2.3,1.2,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["NO",0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["FI",0.0,0.0,0.0,0.0,0.0,0.1,0.2,0.7,1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0,0.0,0.0],
	["SE",0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["IE",0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.2,2.3,3.3,3.8,3.3,2.3,1.2,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["CN",0.0,0.1,0.2,0.7,1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["JP",0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["RU",0.0,0.0,0.2,0.5,1.2,2.3,3.3,3.8,3.3,2.3,1.2,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["MN",0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["KZ",0.0,0.1,0.2,0.7,1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["IN",0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	["EC",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.2,2.3,3.3,3.8,3.3,2.3,1.2,0.5,0.2,0.0,0.0,0.0,0.0,0.0],
	["BO",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0],
	["MX",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0],
	["CU",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.1,0.2,0.7,1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0],
	["GT",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.1,0.2,0.7,1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0],
	["VE",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0],
	["SR",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.2,2.3,3.3,3.8,3.3,2.3,1.2,0.5,0.2,0.0,0.0,0.0,0.0,0.0],
	["GF",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.2,0.5,1.3,2.4,3.5,4.0,3.5,2.4,1.3,0.5,0.2,0.0,0.0,0.0,0.0,0.0],
	["GY",0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.1,0.2,0.7,1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0],
	["US",0.0,0.0,0.0,0.0,0.0,0.1,0.1,0.3,0.7,1.7,2.7,3.1,3.9,4.1,5.0,4.4,4.0,3.0,2.1,1.2,0.7,0.3,0.1,0.1],
	["CA",0.0,0.0,0.0,0.0,0.0,0.0,0.1,0.3,0.5,1.0,1.6,2.4,3.2,3.8,4.0,3.8,3.2,2.4,1.6,1.0,0.5,0.3,0.1,0.0],
	["AU",1.6,3.0,4.4,5.0,4.4,3.0,1.6,0.7,0.2,0.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.1,0.2,0.7]
	];
	this.p = 0;
	this.c = this.rows.length;
	this.h = 24;
	this.data = null;
	this.view = null;
	this.labels = [ "id", "departure", "country" ];
	this.opts = { width: 500, height: 300 };
	this.dom = [];
	this.out = [];
	this.fields =
	{
		number:     ['asis'],
		datetime:   ['asis','Year','Quarter','Month','Date','hour','minute','second'],
		country:    ['asis','code'],
		string:     ['asis']
	};

	this.header =
	{
		id:				{ d:"number"	, c:"number"	, sh: "ID"			, fpre: "(", fpost: ")" },
		country:		{ d:"country"	, c:"string"	, sh: "Country"		, fpre: "(", fpost: ")" },
		departure:		{ d:"datetime"	, c:"datetime"	, sh: "Arrival"		, fpre: "(", fpost: ")" },

		asis:			{ d:"."			, c:"."			, sh: "..."			, fpre: "(", fpost: ")" },
		code:			{ d:"number"	, c:"number"	, sh: "Country"		, fpre: "(", fpost: ")" },
		Year:			{ d:"number"	, c:"number"	, sh: "Year"		, fpre: "strftime('%Y',", fpost: ")" },
		Quarter:		{ d:"number"	, c:"number"	, sh: "Quarter"		, fpre: "strftime('%m',", fpost: ")/4" },
		Month:			{ d:"number"	, c:"number"	, sh: "Month"		, fpre: "strftime('%m',", fpost: ")" },
		Date:			{ d:"number"	, c:"number"	, sh: "Date"		, fpre: "strftime('%d',", fpost: ")" },
		hour:			{ d:"number"	, c:"number"	, sh: "Hour"		, fpre: "strftime('%H',", fpost: ")" },
		minute:			{ d:"number"	, c:"number"	, sh: "Minute"		, fpre: "strftime('%M',", fpost: ")" },
		second:			{ d:"number"	, c:"number"	, sh: "Second"		, fpre: "strftime('%S',", fpost: ")" },

		non:			{ d:"."			, c:"."			, sh: "..."			, fpre: "(",      fpost: ")" , icon: "∅" },
		out:			{ d:"."			, c:"."			, sh: "..."			, fpre: "(",      fpost: ")" , icon: "⊙" },
		dom:			{ d:"."			, c:"."			, sh: "..."			, fpre: "(",      fpost: ")" , icon: "∘" },

		count:			{ d:"number"	, c:"number"	, sh: "Total"		, fpre: "count(", fpost: ")" , icon: "c" },
		max:			{ d:"."			, c:"."			, sh: "Maximum"		, fpre: "max(",   fpost: ")" , icon: "↑" },
		min:			{ d:"."			, c:"."			, sh: "Minimum"		, fpre: "min(",   fpost: ")" , icon: "↓" },
		sum:			{ d:"number"	, c:"number"	, sh: "Sum"			, fpre: "sum(",   fpost: ")" , icon: "∑" },
		avg:			{ d:"number"	, c:"number"	, sh: "Average"		, fpre: "avg(",   fpost: ")" , icon: "~" }
	};


	for( var i = 0 ; i < this.c ; i ++ )
		for( var j = 0 ; j < this.h ; j ++ )
		{
			this.p += this.rows[ i ][ j + 1 ];
		}

	this.date = new Date();
	if( window.openDatabase )
	{
		this.db = openDatabase("Flights", "", "Flights database", 6 * 1000 * 1000 );
		if( ! this.db )
		{
			log("ERROR 1");
		}
		else
		{
			log( this.db.version );
			if( this.db.version == '' )
			{
				this.db.changeVersion('', '1.0',
					function( tx )
					{
						tx.executeSql( 'CREATE TABLE IF NOT EXISTS F (id unique,departure string,country int)' );
					},
					function( rf )
					{
						log( rf );
					},
					function( rs )
					{
						self.load();
					}
				);
			}
		}
	}
	else
	{
		log( 'It is needed an HTML5 browser to see this example.', err.message, err );
	}
}

var dv = new DV();

function dvinit()
{
	//$("#tabs").tabs();
	//{ event: "mouseover" } ).find( ".ui-tabs-nav" ).sortable({ axis: "x" });
	$("#dbload"		).click( function(){	dv.load();		} );
	$("#dbdelete"	).click( function(){	dv.delete();	} );
	$("#dbfirst"	).click( function(){	dv.first();		} );
	$("#dbbyc"		).click( function(){	dv.byc();		} );
	$("#dbbyh"		).click( function(){	dv.byh();		} );
	$("#dbbym"		).click( function(){	dv.bym();		} );
	$("#dbbych"		).click( function(){	dv.bych();		} );
	$("#dbuq"		).click( function(){	dv.uq();		} );
	$("#dbpq"		).click( function(){	dv.pq();		} );

	$("#sintensitymap"	).click( function(){	dv.intensitymap(); } );
	$("#sgeomap"		).click( function(){	dv.geomap();	 } );
	$("#sbarchart"		).click( function(){	dv.barchart();	 } );
	$("#scolumnchart"	).click( function(){	dv.columnchart();  } );
	$("#sscatter"		).click( function(){	dv.scatter();	} );
	$("#stable"	 		).click( function(){	dv.table();	  } );

	dv.addopts();
	
//	dv.bych();
//	dv.first();
//	dv.init();
//	dv.data_into_chart();
	dv.choose();
	dv.byc();
}

DV.prototype.input = function( label, field, fun )
{
	var text = '</td><td class="opts '+fun+'"><input type="radio" name="'+
			label+'_'+field+'" value="'+
			fun+'" id="'+
			label+'_'+field+'_'+fun+'"';
	if( fun == "" )
		text += " disabled='disabled' ";
	if( fun == "non" )
		text += " checked='checked' ";
	text += '/>';
	return text;
}

DV.prototype.inputexp = function( label )
{
//		text += "<td><img class='fun' src='png/funs/" + always[ fa ] + ".png'/></td>";
//		text += "<td><img class='fun' src='png/funs/" + functions_by_type[ 'number' ][ fu ] + ".png'/></td>";
	return "<td class='setup'><acronym title='"+ label +"'>" + this.header[ label ].icon + "</acronym></td>";
}

DV.prototype.addopts = function()
{
	var text = "";
	var functions_by_type =
		{
			number:     ['max','min','sum','avg'],
			datetime:   ['max','min',''   ,''   ],
			string:     [''   ,''   ,''   ,''   ]
		};

	var always = ['non','dom','out','count'];
	
	text += "<table class='setup'>";
	text += "<tr><td>&nbsp;</td>";
	for( var fa in always )
		text += this.inputexp( always[ fa ] );
	for( var fu in functions_by_type[ 'number' ] )
		text += this.inputexp( functions_by_type[ 'number' ][ fu ] );
	text += "</tr>";

	for( var l in this.labels )
	{
		var label = this.labels[ l ];
		var type  = this.get_type_by_label( label );
		for( var fi in this.fields[ type ] )
		{
			var label_fi = this.fields[ type ][ fi ];
			text += '</tr><tr><td>';
			if( label_fi == "asis" )
				text += "<span class='asis'>" + label + "</span>";
			else
				text += "<span class='field'>-" + label_fi + "</span>";
			for( var fa in always )
			{
				text += this.input( label, label_fi, always[ fa ] );
			}
			var ctype = this.get_ctype_by_label( label + "_" + label_fi + "_out" );
			for( var fu in functions_by_type[ ctype ] )
			{
				var f = functions_by_type[ ctype ][ fu ];
				text += this.input( label, label_fi, f );
//				text += label + '_' + label_fi + '_' + f;
			}
		}
		text += '</td>';
	}
	text += "</table>";
	$( "div#dbopts" ).append( text );
	$( "td.opts" ).children( "input" ).change( function(){ dv.pq(); } );
}

DV.prototype.load = function()
{
	var self = this;
	self.db.transaction(
		function( tx )
		{
			var m = 0;
			tx.executeSql('SELECT max(id) from f',[],
				function( tx, res )
				{
					m = res.rows.item(0).m;
					if( m == null )
						m = 0;
					var max = 10000;
					var i,j,k,r;
					for( k = 0 ; k < max ; k ++ )
					{
						var r = Math.random() * self.p;
						var a = 0;
						for( i = 0 ; i < self.c && a < r ; i ++ )
							for( j = 0 ; j < self.h && a < r ; j ++ )
								a += self.rows[ i ][ j + 1 ];
						i--;
						j--;
						a = Math.ceil( a );
						m ++;
						tx.executeSql('INSERT INTO f (id,departure,country) VALUES ( ' +
								m + ',"' +
								new Date( 2009 +	Math.floor( Math.random() * 2.9  ),
													Math.floor( Math.random() * 12 ),
													Math.floor( Math.random() * 31 ),
												j,
													Math.floor( Math.random() * 60 ),
													Math.floor( Math.random() * 60 )
										).toISOString() + '",' +
								i +
								' )',[],
							function( tx, resok )
							{
								;
							},
							function( tx, resfail )
							{
								;
							}
						);
					}
				}
			);
		}
	);
}

DV.prototype.delete = function()
{
	this.unload();
	this.query('DELETE FROM F');
}

DV.prototype.first = function()
{
	var self = this;
	this.unload();
	this.dominant = [ "id" ];
	this.query( 'SELECT id, c, t FROM F limit 25',
		function()
		{
			self.choose();
		}
	);
}

DV.prototype.select = function( label, field, fun )
{
	$("[name="+label+"_"+field+"]").filter("[value="+fun+"]").attr("checked","checked");
}

DV.prototype.unselect = function( )
{
	$( "td.opts" ).children( "input[value=non]" ).attr("checked","checked");
}

DV.prototype.byc = function()
{
	this.unselect();
	this.select( "country", "asis", "dom" );
	this.select( "id", "asis", "count" );
	this.pq();
}

DV.prototype.byh = function()
{
	this.unselect();
	this.select( "departure", "hour", "dom" );
	this.select( "id", "asis", "count" );
	this.pq();
}

DV.prototype.bym = function()
{
	this.unselect();
	this.select( "departure", "Month", "dom" );
	this.select( "id", "asis", "count" );
	this.pq();
}

DV.prototype.bych = function()
{
	this.unselect();
	this.select( "departure", "hour", "dom" );
	this.select( "country", "asis", "dom" );
	this.select( "id", "asis", "count" );
	this.pq();
}

DV.prototype.uq = function()
{
	var self = this;
	this.unload();
	this.query( $( "#uq" ).val(),
		function()
		{
			self.choose();
		}
	);
}

DV.prototype.pq = function()
{
	var self = this;
	this.unload();
	this.dom = [];
	this.out = [];
	for( var n in this.labels )
	{
		var label = this.labels[ n ];
		var type  = this.header[ label ].d;
		for( var f in this.fields[ type ] )
		{
			var field = this.fields[ type ][ f ];
			var val = $("input[name='" + label + "_" + field + "']:checked").val();
			if( val != "non" )
			{
				var ff = this.header[ field ];
				var hv = this.header[ val ];
				var value = ff.fpre + label + ff.fpost;
				var txt = hv.fpre + value + hv.fpost + " as " + label + "_" + field + "_" + val;
				if( val == "dom" )
				{
					this.dom.push( label + "_" + field + "_" + val );
					this.out = $.merge( [ txt ], this.out );
				}
				else
					this.out.push( txt );
			}
		}
	}
	
	var s = $.merge( [], this.dom );
	$.merge( s, this.out );
	
	var query = "select "+ this.out.join(',') +" from f ";
	if( this.dom.length > 0 )
		query += " group by " + this.dom.join( ',' );
	if( ( this.dom.length + this.out.length ) > 0 )
		this.query( query,
			function()
			{
				self.choose();
			}
		);
	else
		self.choose();
}

DV.prototype.query = function( sql, callback )
{
	log( sql );
	var self = this;
	this.db.transaction(
		function( tx )
		{
			tx.executeSql( sql, [],
				function( tx, res )
				{
					self.format( res );
					if( typeof( callback ) != "undefined" )
						callback(); + 1 
				},
				function( tx, resfail ){
					log( resfail.message, resfail );
				}
			);
		}
	);
}

DV.prototype.unload = function()
{
//	$("#table").html( "Loading" );
	this.data = new google.visualization.DataTable();
}

DV.prototype.getfunct = function ( label )
{
	var s = label.indexOf( '_' );
	var l = label.substr( label.indexOf('_',s+1) + 1 );
	return l;
}

DV.prototype.getfield = function ( label )
{
	var s = label.indexOf( '_' );
	var l = label.substr( label.indexOf('_') + 1, label.indexOf( '_',s+1 ) - label.indexOf( '_' ) - 1 );
	return l;
}

DV.prototype.getlex = function ( label )
{
	var l = label.substr( 0, label.indexOf('_') );
	return l;
}

DV.prototype.get_type_by_label = function ( label )
{
	var t = this.header[ this.getfunct( label ) ].d;
	if( t == "." )
		t = this.header[ this.getfield( label ) ].d;
	if( t == "." )
		t = this.header[ this.getlex( label ) ].d;
	return t;
}

DV.prototype.get_ctype_by_label = function ( label )
{
	var t = this.header[ this.getfunct( label ) ].c;
	if( t == "." )
		t = this.header[ this.getfield( label ) ].c;
	if( t == "." )
		t = this.header[ this.getlex( label ) ].c;
	return t;
}

DV.prototype.format = function( res )
{
	if( typeof( res ) == "undefined" )
	{
		$( "#result" ).html( "Resultset with errors" );
		return;
	}
	if( res.rows.length == 0 )
	{
		$( "#result" ).html( "Resultset empty" );
		return;
	}

	var headerst = {};
	var example = res.rows.item( 0 );
	for( var label in example )
	{
		var hs = this.get_type_by_label( label );
		var hc = this.get_ctype_by_label( label );
		headerst[ label ] = hs;
		this.data.addColumn( hc, hs, label );
	}

	var len = res.rows.length;
	for( var i = 0 ; i < len ; i ++ )
	{
		var item = res.rows.item( i );
		var row = [];
		for( var label in item )
		{
			var value = item[ label ];
			if( value != null )
			{
				switch( headerst[ label ] )
				{
					case "string":
						value = value.toString();
					break;
					case "number":
						value = parseFloat( value.toString() );
					break;
					case "country":
						value = this.rows[ value ][ 0 ];
					break;
					case "datetime":
						value = new Date( value );
					break;
				}
				
			}
			row.push( value );
		}
		this.data.addRow( row );
	}
	this.view = new google.visualization.DataView( this.data );
}

DV.prototype.getqtypebysql = function ( sqlf )
{
	var s2 = sqlf.indexOf( " as " );
	var s3 = sqlf;
	if( s2 != -1 )
		s3 = sqlf.substr( s2 + 4 );
	log( sqlf, s3 );
	return this.get_type_by_label( s3 );
};

DV.prototype.choose = function ( )
{
	$( "div#visopts" ).children( "img.icon" ).hide();
	$( "#result" ).hide();

	if( this.dom.length == 2 )
	{
		if( this.getqtypebysql( this.dom[ 0 ] ) == "number" && 
			this.getqtypebysql( this.dom[ 1 ] ) == "number" )
			$( "#sscatter"		).show();
		if( this.getqtypebysql( this.dom[ 0 ] ) == "country" ||
			this.getqtypebysql( this.dom[ 1 ] ) == "country" )
			$( "#sintensitymap"	).show();
	}
	if( this.dom.length == 1 )
	{
		if( this.getqtypebysql( this.out[ 1 ] ) == "number" )
		{
			$( "#sbarchart"	 	).show();
			$( "#scolumnchart"	).show();
		}
		if( this.out.length == 2 &&
			this.getqtypebysql( this.dom[ 0 ] ) == "country" &&
			this.getqtypebysql( this.out[ 1 ] ) == "number" )
		{
			$( "#sgeomap"	 	).show();
		}
	}
	if( ( this.dom.length + this.out.length ) > 0 )
		$( "#stable" ).show();
	
	var v = $( "div#visopts" ).children( "img.icon:visible" );
	if( v.size() > 0 )
	{
		v.first().click();
		$( "#result" ).fadeIn();
	}
}

DV.prototype.table = function ( )
{
	var table = new google.visualization.Table( $( "#result" )[0] );
	table.draw( this.data, this.opts );
}

DV.prototype.barchart = function ()
{
	var bc = new google.visualization.BarChart( $( "#result" )[0] );
	bc.draw( this.data, this.opts );
}

DV.prototype.columnchart = function ()
{
	var cc = new google.visualization.ColumnChart( $( "#result" )[0] );
	cc.draw( this.data, this.opts );
}

DV.prototype.geomap = function ()
{
	var gm = new google.visualization.GeoMap( $( "#result" )[0] );
	gm.draw( this.data, this.opts );
}

DV.prototype.scatter = function ()
{
	var sc = new google.visualization.ScatterChart( $( "#result" )[0] );
	sc.draw( this.data, this.opts );
}

DV.prototype.intensitymap = function ()
{
	this.d2 = new google.visualization.DataTable();
	var l = this.data.getNumberOfRows();
	var ctoi = {};
	this.d2.addColumn( "string", "c", "c" );
	for( var h = 0 ; h < 24 ; h += 6 )
		this.d2.addColumn( "number", 'h' + h, 'h' + h );
	this.d2.addRows( this.c );
	for( var c = 0 ; c < this.c ; c ++ )
	{
		ctoi[ this.rows[ c ][ 0 ] ] = c;
		this.d2.setValue( c, 0, this.rows[ c ][ 0 ] );
		for( var h = 0 ; h < 24 ; h += 6 )
			this.d2.setValue( c, (h/6) + 1, 0 );
	}
	for( var i = 0 ; i < l ; i ++ )
	{
		var h = this.data.getValue( i, 1 );
		if( ( h % 6 ) != 0 )
		{
			var c = this.data.getValue( i, 0 );
			var m = this.data.getValue( i, 2 );
			this.d2.setValue( ctoi[c], parseInt(h/6)+1, parseInt(m) );
		}
	}
	var im = new google.visualization.IntensityMap( $( "#result" )[0] );
	im.draw( this.d2, this.opts );
}

DV.prototype.data_into_chart = function ( )
{
/*
	var d = new google.visualization.DataTable();
	d.addColumn( "datetime", "datetime" );
	d.addColumn( "number", "people" );
	//d.addColumn( "string", "country" );
	d.addRows( this.model.data.length );
	for( var a in data )
	{
		var i = new Number( a );
		d.setValue( 0, 0, this.model.data[ a ].datetime );
		d.setValue( 0, 1, this.model.data[ a ].people );
		//d.setValue( 0, 2, data[ a ].country );
	}
	var chart = new google.visualization.LineChart( $('#chart1')[0] );
	chart.draw( d, {width: 800, height: 400, title: 'Example' });
*/

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Country');
	data.addColumn('number', 'Total visits (m/year)');
	data.addRows( [
		['France',210],
		['Mexico',220],
		['Germany',250],
		['Argentina',310],
		['India',310],
		['Australia',330],
		['Finland',340],
		['Norway',380],
		['Italy',400],
		['Brazil',420],
		['Canada',500],
		['United Kingdom',550],
		['Russia',560],
		['Spain',710],
		['China',800],
		['United States',840]
	]);

	var table = new google.visualization.Table( $('#chart1')[0] );
	table.draw(data, {width: 500, height: 300 });

	var geomap = new google.visualization.GeoMap( $('#chart2')[0] );
	geomap.draw(data, {width: 500, height: 300, 'dataMode': 'regions',
		colors: [0x88ff88, 0x008800] } );

	var bar = new google.visualization.BarChart( $('#chart3')[0] );
	bar.draw(data, {width: 500, height: 400 } );

	var pie = new google.visualization.PieChart( $('#chart4')[0] );
	pie.draw(data, {width: 400, height: 400 } );


	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', '', 'Country');
	data2.addColumn('number', 'Visits1','a');
	data2.addColumn('number', 'Visits2','b');
	data2.addRows( [
		['Europe',	 1000,12],
		['Asia',		1000,10],
		['North America',1000,12],
		['South America',1000,10],
		['Oceania',	1000,14],
		['Europe',	 1200,10],
		['Asia',		1200,11],
		['North America',1200,10],
		['South America',1200,13],
		['Oceania',	1200,10]
	]);

	var table2 = new google.visualization.Table( $('#chart5')[0] );
	table2.draw(data2, {});

	var mc = new google.visualization.MotionChart( $('#chart6')[0] );
	mc.draw(data2, {width: 600, height: 300 } );
	
	var data3 = new google.visualization.DataTable();
	data3.addColumn( "string", "Continent" );
	for( var i = 10 ; i <= 19 ; i ++ )
		data3.addColumn( "number", i );
	data3.addRows([
		['Asia',6.0900877456,27.2938796871,45,27.2938796871,6.0900877456,0.4999048442,0.0150958183,0.0001676994,6.85349088512068E-007,0.000000001],
		['Europe',24.2612263885,5.4134113295,0.4443598615,0.0134185051,0.0001490661,6.09199189788505E-007,9.15893938258221E-010,5.06566621963767E-013,1.03070284366199E-016,7.71499939185567E-021],
		['North America',0.0001676994,0.0150958183,0.4999048442,6.0900877456,27.2938796871,45,27.2938796871,6.0900877456,0.4999048442,0.0150958183],
		['South America',1.14486742282278E-010,7.61498987235631E-008,1.86332658603934E-005,0.0016773131,0.0555449827,0.6766764162,3.0326532986,5,3.0326532986,0.6766764162],
		['Oceania',2.4022122088,2.8378784067,3,2.8378784067,2.4022122088,1.8195919791,1.2333368715,0.7480566263,0.4060058497,0.1971855858],
		['Africa',1.6014748058,1.8919189378,2,1.8919189378,1.6014748058,1.2130613194,0.822224581,0.4987044176,0.2706705665,0.1314570572]
//		['Visitas',34.3551688482,37.4521842555,50.944283339,38.1288605955,37.4433484961,49.2092351682,32.3971902573,12.3370164889,4.2092352443,1.0204148786]
	]);

	var bc3 = new google.visualization.BarChart( $( "#chart7" )[0] );
	bc3.draw( data3, {width: 600, height: 300 } );

	var data4 = new google.visualization.DataTable();
	data4.addColumn( "string", "hora" );
	data4.addColumn( "number", "Asia" );
	data4.addColumn( "number", "Europe" );
	data4.addColumn( "number", "North America" );
	data4.addColumn( "number", "South America" );
	data4.addColumn( "number", "Oceania" );
	data4.addColumn( "number", "Africa" );
	data4.addRows([
		["10",6.0900877456,24.2612263885,0.0001676994,1.14486742282278E-010,2.4022122088,1.6014748058],
		["11",27.2938796871,5.4134113295,0.0150958183,7.61498987235631E-008,2.8378784067,1.8919189378],
		["12",45,0.4443598615,0.4999048442,1.86332658603934E-005,3,2],
		["13",27.2938796871,0.0134185051,6.0900877456,0.0016773131,2.8378784067,1.8919189378],
		["14",6.0900877456,0.0001490661,27.2938796871,0.0555449827,2.4022122088,1.6014748058],
		["15",0.4999048442,6.09199189788505E-007,45,0.6766764162,1.8195919791,1.2130613194],
		["16",0.0150958183,9.15893938258221E-010,27.2938796871,3.0326532986,1.2333368715,0.822224581],
		["17",0.0001676994,5.06566621963767E-013,6.0900877456,5,0.7480566263,0.4987044176],
		["18",6.85349088512068E-007,1.03070284366199E-016,0.4999048442,3.0326532986,0.4060058497,0.2706705665],
		["19",0.000000001,7.71499939185567E-021,0.0150958183,0.6766764162,0.1971855858,0.1314570572]
	]);

	var cc4 = new google.visualization.ColumnChart( $( "#chart8" )[0] );
	cc4.draw( data4, {width: 600, height: 400, isStacked : true } );

	var data5 = new google.visualization.DataTable();
	data5.addColumn( "string", "hora" );
	data5.addColumn( "number", "Total" );
	data5.addRows([
		["10",34.3551688482],
		["11",37.4521842555],
		["12",50.944283339],
		["13",38.1288605955],
		["14",37.4433484961],
		["15",49.2092351682],
		["16",32.3971902573],
		["17",12.3370164889],
		["18",4.2092352443],
		["19",1.0204148786]
	]);

	var cc5 = new google.visualization.ColumnChart( $( "#chart9" )[0] );
	cc5.draw( data5, {width: 600, height: 400 } );

	var data6 = new google.visualization.DataTable();
	data6.addColumn( "string", "continent" );
	data6.addColumn( "number", "total" );
	data6.addRows([
		["Asia", 112.2831039137 ],
		["Europe", 30.1325657609 ],
		["North America", 112.7981038898 ],
		["South America", 12.4759004349 ],
		["Oceania", 17.8843581435 ],
		["Africa", 11.922905429 ]
	]);

	var cc6 = new google.visualization.ColumnChart( $( "#chart10" )[0] );
	cc6.draw( data6, {width: 600, height: 400 } );

}
