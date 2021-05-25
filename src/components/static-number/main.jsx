import React from 'react'
import Table from './table/main'
import './style.css'

function StaticNum() {
    return (
        <div className="statistic-number">
            <div className="container">
                <div className="static-table">
                    <div className="table-number">
                        <Table number="95" text="Happy Clients" />
                        <div className="circle circle1"></div>
                        <Table number="115" text="Project Done" />
                        <div className="circle circle2"></div>
                        <Table number="8+" text="Years Of Experince" />
                        <div className="circle circle3"></div>
                        <Table number="12" text="National Awards" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaticNum